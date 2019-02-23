import throttle from '@tinkoff/utils/function/throttle';
import $ from 'jquery';
import { getNode, Templates } from '../templates/Templates';

const ID_TPU_STACKEDIT_IFRAME = 'JSTpuStackeditIframe';
const CLASS_JS_TPU_STACKEDIT = 'js-tpu-stackedit';
const CLASS_JS_DESCRIPTION_DRAFT = 'js-description-draft';
const CLASS_JS_SHOW_WITH_DESC = 'js-show-with-desc';

export default class AddButton
{
    constructor()
    {
        this._listChangeHandler = throttle(2000, this._listChangeHandler);
        $(document.body).append(getNode(Templates.TpuStackeditIframeWrapper, { iframeId: ID_TPU_STACKEDIT_IFRAME }));
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
            firstList.prepend(getNode(Templates.Button)).addClass('js-btn-added');
            $('.' + CLASS_JS_TPU_STACKEDIT).click(this._addButtonClickHandler);
        }
    }

    _addButtonClickHandler()
    {
        $(`.${CLASS_JS_SHOW_WITH_DESC}`).click();
        let content = $(`.${CLASS_JS_DESCRIPTION_DRAFT}`).val();

        content = encodeURIComponent(content);

        $(`#${ID_TPU_STACKEDIT_IFRAME}`).empty().append(getNode(Templates.IframeHtml, { content }));
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
