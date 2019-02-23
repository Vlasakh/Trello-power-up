import { fromEvent, Subject } from 'rxjs';
import { map, filter, debounceTime, tap } from 'rxjs/operators';
import $ from 'jquery';

import { getNode, Templates } from '../templates/Templates';
import { ID_TPU_STACKEDIT_IFRAME } from '../templates/classes';

const CLASS_JS_DESCRIPTION_DRAFT = 'js-description-draft';
const CLASS_JS_SHOW_WITH_DESC = 'js-show-with-desc';
const JS_SAVE_EDIT = 'js-save-edit';

export default class StackEdit
{
    /**
     * @public
     */
    init()
    {
        $(document.body).append(getNode(Templates.TpuStackeditIframeWrapper, { iframeId: ID_TPU_STACKEDIT_IFRAME }));
        this._startSE();
    }

    /**
     * @public
     */
    open()
    {
        $(`.${CLASS_JS_SHOW_WITH_DESC}`).click();
        let content = $(`.${CLASS_JS_DESCRIPTION_DRAFT}`).val();

        content = encodeURIComponent(content);

        $(`#${ID_TPU_STACKEDIT_IFRAME}`).empty().append(getNode(Templates.IframeHtml, { content }));
    }

    _close()
    {
        $(`#${ID_TPU_STACKEDIT_IFRAME}`).empty();
        $(`.${JS_SAVE_EDIT}`).click();
    }

    _hanleChange()
    {
        const stackEditChange$ = new Subject().pipe(debounceTime(800));

        stackEditChange$.subscribe(val =>
        {
            console.log('stackEditChange val:', [val, val.payload.content.text, $(`.${CLASS_JS_DESCRIPTION_DRAFT}`)]);
            $(`.${CLASS_JS_DESCRIPTION_DRAFT}`).val(val.payload.content.text);
        });

        return stackEditChange$;
    }

    _startSE()
    {
        const stackEditChange$ = this._hanleChange();

        const stackEdit$ = fromEvent(window, 'message')
            .pipe(
                filter(event => event.origin === 'https://stackedit.io'),
                map(event => event.data),
                // tap(data => console.log(data)),
            )
            .subscribe(data =>
            {
                // console.log('Debounced Input:', data);
                switch (data.type)
                {
                    case 'fileChange':
                        stackEditChange$.next(data);
                        break;
                    case 'close':
                        console.log('close action');
                        this._close();
                }
            });
    }
}
