/* eslint-disable no-console */
import $ from 'jquery';

import throttle from '@tinkoff/utils/function/throttle';

import { getNode, Templates } from '../templates/Templates';
import { CLASS_JS_TPU_STACKEDIT } from '../templates/classes';

const CLASS_JS_TAB_PARENT = 'js-tab-parent';
const CLASS_JS_BTN_ADDED = 'js-btn-added';

export default class AddButton {
    stackEdit;

    constructor(stackEdit) {
        this.stackEdit = stackEdit;
        this._listChangeHandler = throttle(2000, this._listChangeHandler);

    }

    init() {
        this._addOpenerObserver();
    }

    _addButton() {
        const firstList = $('.window-sidebar .window-module.u-clearfix').first();

        if (!firstList.hasClass(CLASS_JS_BTN_ADDED)) {
            console.log('try add button');
            firstList.prepend(getNode(Templates.Button)).addClass(CLASS_JS_BTN_ADDED);
            $('.' + CLASS_JS_TPU_STACKEDIT).click(this._handleOpenClick.bind(this));
        }
    }

    _handleOpenClick() {
        this.stackEdit.open();
    }

    _listChangeHandler() {
        if ($(`.${CLASS_JS_TAB_PARENT}`).is(':visible')) {
            console.log('visible');
            this._addButton();
        }
    }

    _addOpenerObserver() {
        const observer = new MutationObserver(() =>
            this._listChangeHandler());
        const node = document.querySelector(`.${CLASS_JS_TAB_PARENT}`);

        observer.observe(node, {
            childList: true,
            subtree: true,
            attributes: true,
        });

        setTimeout(() => $(node).prepend('<div>Test node</div>'), 500);
    }
}
