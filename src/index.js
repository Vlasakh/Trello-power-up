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

loadDynamicScript('https://cdnjs.cloudflare.com/ajax/libs/rxjs/6.4.0/rxjs.umd.min.js', 'tpuRxjs')
    .then(setTimeout(ready, 1000));
