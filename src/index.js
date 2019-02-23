// ==UserScript==
// @name Trello power up
// @version 0.0.1
// @description Add support for . . .
// @match https://trello.com/*
// @match http://trello.com/*
// ==/UserScript==

// import

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

class Templates
{
    static Button = `<a class="button-link js-tpu-stackedit" href="#" title="Open in stackedit">
            <span class="icon-sm icon-small">
                <svg width="100%" height="100%" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"><path d="M23.997,6.002c0,-3.311 -2.688,-5.999 -5.999,-5.999l-11.999,0c-3.311,0 -5.999,2.688 -5.999,5.999l0,11.999c0,3.311 2.688,5.999 5.999,5.999l11.999,0c3.311,0 5.999,-2.688 5.999,-5.999l0,-11.999Z" style="fill:none;"/><clipPath id="_clip1"><path d="M23.997,6.002c0,-3.311 -2.688,-5.999 -5.999,-5.999l-11.999,0c-3.311,0 -5.999,2.688 -5.999,5.999l0,11.999c0,3.311 2.688,5.999 5.999,5.999l11.999,0c3.311,0 5.999,-2.688 5.999,-5.999l0,-11.999Z"/></clipPath><g clip-path="url(#_clip1)"><path d="M23.997,0.003l-24,0l12,12l12,-12Z" style="fill:#ffd700;"/><path d="M-0.003,0.003l0,24l12,-12l-12,-12Z" style="fill:#a5c700;"/><path d="M-0.003,24.003l24,0l-12,-12l-12,12Z" style="fill:#ff8a00;"/><path d="M23.997,24.003l0,-24l-12,12l12,12Z" style="fill:#66aefd;"/><path d="M22.497,-1.497l-10.5,10.497l3,3.003l10.5,-10.5l-3,-3Z" style="fill:url(#_Linear2);"/><path d="M25.499,22.503l-10.498,-10.5l-3.002,3l10.5,10.5l3,-3Z" style="fill:url(#_Linear3);"/><path d="M1.497,25.501l10.5,-10.497l-3,-3.003l-10.5,10.5l3,3Z" style="fill:url(#_Linear4);"/><path d="M-1.503,1.503l10.498,10.5l3.002,-3l-10.5,-10.5l-3,3Z" style="fill:url(#_Linear5);"/></g><path d="M21.75,5.852c0,-2.195 -1.782,-3.977 -3.977,-3.977l-11.546,0c-2.195,0 -3.977,1.782 -3.977,3.977l0,11.546c0,2.195 1.782,3.977 3.977,3.977l11.546,0c2.195,0 3.977,-1.782 3.977,-3.977l0,-11.546Z" style="fill:#fff;"/><path d="M4.633,6.013l1.37,0l0,-1.828l1.399,0l0,1.828l1.696,0l0,-1.828l1.399,0l0,1.828l1.37,0l0,1.691l-1.37,0l0,1.902l1.37,0l0,1.69l-1.37,0l0,1.829l-1.399,0l0,-1.829l-1.696,0l0,1.829l-1.399,0l0,-1.829l-1.37,0l0,-1.69l1.37,0l0,-1.902l-1.37,0l0,-1.691Zm2.769,1.691l0,1.902l1.696,0l0,-1.902l-1.696,0Z" style="fill:#737373;"/><defs><linearGradient id="_Linear2" x1="0" y1="0" x2="1" y2="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(-2.99995,-3,3,-2.99995,23.9974,3.00265)"><stop offset="0" style="stop-color:#66aefd;stop-opacity:1"/><stop offset="1" style="stop-color:#ffd700;stop-opacity:1"/></linearGradient><linearGradient id="_Linear3" x1="0" y1="0" x2="1" y2="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(3,-2.99995,2.99995,3,20.9987,24.0027)"><stop offset="0" style="stop-color:#ff8a00;stop-opacity:1"/><stop offset="1" style="stop-color:#66aefd;stop-opacity:1"/></linearGradient><linearGradient id="_Linear4" x1="0" y1="0" x2="1" y2="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(2.99995,3,-3,2.99995,-0.00255928,21.0013)"><stop offset="0" style="stop-color:#a5c700;stop-opacity:1"/><stop offset="1" style="stop-color:#ff8a00;stop-opacity:1"/></linearGradient><linearGradient id="_Linear5" x1="0" y1="0" x2="1" y2="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(-3,2.99995,-2.99995,-3,2.99744,0.00265252)"><stop offset="0" style="stop-color:#ffd700;stop-opacity:1"/><stop offset="1" style="stop-color:#a5c700;stop-opacity:1"/></linearGradient></defs></svg>
            </span>
            <span>Edit SE</span>
        </a>`;
    static Styles =
        '<link rel="stylesheet" type="text/css" href="https://927ow4oqqr.codesandbox.io/src/styles.css" media="all"/>';
    static TpuStackeditIframeWrapper = `<div id="${ID_TPU_STACKEDIT_IFRAME}"></div>`;
    static IframeHtml = `<div class="stackedit-iframe-container" data-style="position: absolute; top: 0; left: 0; z-index: 1000">
            <iframe style="width: 100%; height: 100%;" src="https://stackedit.io/app#origin=https%3A%2F%2Ftrello.com&fileName=trello.com&contentText={{{content}}}" class="stackedit-iframe"></iframes>
            </div>`;

    static getNode(html)
    {
        const fragment = document.createElement('div');

        fragment.innerHTML = html;
        return fragment.children[0];
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
