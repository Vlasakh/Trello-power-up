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

let Rx;

function ready()
{
    Rx = rxjs;
    new Styles().init();
    new StackEdit();
    new AddButton().init();

    console.log(Rx);
}

loadDynamicScript('https://cdnjs.cloudflare.com/ajax/libs/rxjs/6.4.0/rxjs.umd.min.js', 'tpuRxjs')
    .then(setTimeout(ready, 1000));
