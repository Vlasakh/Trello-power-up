import $ from 'jquery';

import throttle from '@tinkoff/utils/function/throttle';

import StackEdit from './StackEdit';

import { getNode, Templates } from '../templates/Templates';
import { CLASS_JS_TPU_STACKEDIT } from '../templates/classes';


const ID_TPU_STACKEDIT_IFRAME = 'JSTpuStackeditIframe';
const CLASS_JS_DESCRIPTION_DRAFT = 'js-description-draft';
const CLASS_JS_SHOW_WITH_DESC = 'js-show-with-desc';
const CLASS_JS_TAB_PARENT = 'js-tab-parent';
const CLASS_JS_BTN_ADDED = 'js-btn-added';

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

        if (!firstList.hasClass(CLASS_JS_BTN_ADDED))
        {
            console.log('try add button');
            firstList.prepend(getNode(Templates.Button)).addClass(CLASS_JS_BTN_ADDED);
            $('.' + CLASS_JS_TPU_STACKEDIT).click(this._handleOpenClick);
        }
    }

    _handleOpenClick()
    {
        $(`.${CLASS_JS_SHOW_WITH_DESC}`).click();
        let content = $(`.${CLASS_JS_DESCRIPTION_DRAFT}`).val();

        content = encodeURIComponent(content);

        $(`#${ID_TPU_STACKEDIT_IFRAME}`).empty().append(getNode(Templates.IframeHtml, { content }));
    }

    _listChangeHandler()
    {
        if ($(`.${CLASS_JS_TAB_PARENT}`).is(':visible'))
        {
            console.log('visible');
            this._addButton();
        }
    }

    _addOpenerObserver()
    {
        var observer = new MutationObserver(() =>
            this._listChangeHandler());

        observer.observe(document.querySelector(`.${CLASS_JS_TAB_PARENT}`), {
            childList: true,
            subtree: true,
            attributes: true,
        });
    }
}
