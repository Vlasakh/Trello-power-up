// ==UserScript==
// @name Trello power up
// @version 0.0.1
// @description Add support for . . .
// @match https://trello.com/*
// @match http://trello.com/*
// ==/UserScript==

import $ from 'jquery';
import throttle from '@tinkoff/utils/function/throttle';
import loadDynamicScript from './utils/loadDynamicScript';

import { Templates, getNode } from './templates/Templates';
import Styles from '../css/Styles';
import AddButton from './inc/AddButton';
import StackEdit from './inc/StackEdit';

function ready()
{
    const stackEdit = new StackEdit();

    new Styles().init();
    stackEdit.init();
    new AddButton(stackEdit).init();
}

setTimeout(ready, 1000);
