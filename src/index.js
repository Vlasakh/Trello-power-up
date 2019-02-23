// ==UserScript==
// @name Trello power up
// @version 0.0.1
// @description Add support for . . .
// @match https://trello.com/*
// @match http://trello.com/*
// ==/UserScript==

import Templates from './inc/Templates';

const ID_TPU_STACKEDIT_IFRAME = 'JSTpuStackeditIframe';
const CLASS_JS_SHOW_WITH_DESC = 'js-show-with-desc';

let Rx;

function ready()
{
    Rx = rxjs;
    new Styles().init();
    new AddButton().init();

    console.log(Rx);
    const { iif, Subject } = Rx;
    const { map, filter, debounceTime, mergeMap, switchMap, tap } = Rx.operators;

    const stackEditChange$ = new Subject().pipe(debounceTime(800));
    const stackEditClose$ = new Subject();

    stackEditChange$.subscribe(val =>
    {
        console.log('stackEditChange val:', val);
    });

    stackEditClose$.subscribe(val =>
    {
        console.log('stackEditClose val:', val);
    });

    const stackEdit$ = Rx.fromEvent(window, 'message')
        .pipe(
            filter(event => event.origin === 'https://stackedit.io'),
            map(event => event.data),
            tap(data => console.log(data))
            // switchMap((data) =>
            //     // data.type === 'fileChange' ? Rx.of({ ...data, fc: true }).pipe(debounceTime(800)) : Rx.of(data)
            //     data.type === 'fileChange' ? stackEditChange$.next(data) : Rx.of(data)
            // )
        )
        .subscribe(data =>
        {
            console.log('Debounced Input:', data);
            switch (data.type)
            {
                case 'fileChange':
                    stackEditChange$.next(data);
                    break;
                case 'close':
                    console.log('close action');
            }
        });
    // console.log(rxjs);

    // window.addEventListener('message', function(event) {
    //     if (event.origin === 'https://stackedit.io') {
    //         console.log(event.data);
    //     }
    // });
}

class StackEdit
{
    listener()
    {
        // fileChange;
    }
}

class Styles
{
    constructor()
    {
        this.styleContent =
            '\n.stackedit-no-overflow {\n  overflow: hidden;\n}\n\n.stackedit-container {\n  background-color: rgba(160, 160, 160, 0.5);\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 9999;\n}\n\n.stackedit-hidden-container {\n  position: absolute;\n  width: 10px;\n  height: 10px;\n  left: -99px;\n}\n\n.stackedit-iframe-container {\n  background-color: #fff;\n  position: absolute;\n  margin: auto;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  height: 98%;\n  width: 98%;\n  max-width: 1280px;\n  border-radius: 2px;\n  overflow: hidden;\n}\n\n.stackedit-iframe {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  border: 0;\n  border-radius: 2px;\n}\n\n@media (max-width: 740px) {\n  .stackedit-iframe-container {\n    height: 100%;\n    width: 100%;\n    border-radius: 0;\n  }\n\n  .stackedit-iframe {\n    border-radius: 0;\n  }\n}\n\n.stackedit-close-button {\n  position: absolute !important;\n  box-sizing: border-box !important;\n  width: 38px !important;\n  height: 36px !important;\n  margin: 4px !important;\n  padding: 0 4px !important;\n  text-align: center !important;\n  vertical-align: middle !important;\n  text-decoration: none !important;\n}\n';
    }

    init()
    {
        this._addStyles();
    }

    _addStyles()
    {
        document.head.appendChild(Templates.getNode(Templates.Styles));
    }

    _createStyle()
    {
        var styleEl = document.createElement('style');

        styleEl.type = 'text/css';
        styleEl.innerHTML = this.styleContent;
        document.head.appendChild(styleEl);
        this._createStyle = function createStyle() {}; // Create style only once
    }
}

class AddButton
{
    constructor()
    {
        this._listChangeHandler = Utils.throttle(2000, this._listChangeHandler);
        $(document.body).append(Templates.TpuStackeditIframeWrapper);
    }

    init()
    {
        this._addOpenerObserver();
    }

    _addButton()
    {
        const firstList = $('.window-sidebar .window-module .u-clearfix').first();

        if (!firstList.hasClass('js-btn-added'))
        {
            console.log('try add button');
            firstList.prepend(Templates.getNode(Templates.Button)).addClass('js-btn-added');
            $('.js-tpu-stackedit').click(this._addButtonClickHandler);
        }
    }

    _addButtonClickHandler()
    {
        $(`.${CLASS_JS_SHOW_WITH_DESC}`).click();
        let content = $('.js-description-draft').val();

        content = encodeURIComponent(content);

        const iframeHtml = `<div class="stackedit-iframe-container" data-style="position: absolute; top: 0; left: 0; z-index: 1000">
            <iframe style="width: 100%; height: 100%;" src="https://stackedit.io/app#origin=https%3A%2F%2Ftrello.com&fileName=trello.com&contentText={{{content}}}" class="stackedit-iframe"></iframes>
            </div>`;

        $(`#${ID_TPU_STACKEDIT_IFRAME}`).html(Templates.IframeHtml.replace('{{{content}}}', content));
    }

    _listChangeHandler(observer, p2, p3)
    {
        if ($('.js-tab-parent').is(':visible'))
        {
            console.log('visible');
            this._addButton();
        }
    }

    _addOpenerObserver()
    {
        var observer = new MutationObserver(() =>
            this._listChangeHandler(observer));

        observer.observe(document.querySelector('.js-tab-parent'), {
            childList: true,
            subtree: true,
            attributes: true,
        });
    }
}

class Utils
{
    static throttle(wait, fn)
    {
        var lastCalled = void 0;
        var timeout = void 0;

        return function()
        {
            var _this = this;

            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++)
            {
                args[_key] = arguments[_key];
            }

            var now = Date.now();
            var diff = lastCalled + wait - now;

            if (lastCalled && diff > 0)
            {
                clearTimeout(timeout);
                timeout = setTimeout(() =>
                {
                    lastCalled = now;
                    fn.apply(_this, args);
                }, diff);
            }
            else
            {
                lastCalled = now;
                fn.apply(this, args);
            }
        };
    }

    static loadDynamicScript(url, id)
    {
        const existingScript = document.getElementById(id);

        return new Promise(res =>
        {
            if (!existingScript)
            {
                const script = document.createElement('script');

                script.src = url; // URL for the third-party library being loaded.
                script.id = id;
                script.defer = true;
                document.body.appendChild(script);

                script.onload = () =>
                {
                    res();
                };
            }

            if (existingScript) { res(); }
        });
    }
}

Utils.loadDynamicScript('https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js', 'tpuJquery')
    .then(() => Utils.loadDynamicScript('https://cdnjs.cloudflare.com/ajax/libs/rxjs/6.4.0/rxjs.umd.min.js', 'tpuRxjs'))
    .then(setTimeout(ready, 1000));
