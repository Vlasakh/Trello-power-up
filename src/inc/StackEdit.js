import { fromEvent, Subject } from 'rxjs';
import { map, filter, debounceTime, mergeMap, switchMap, tap } from 'rxjs/operators';

export default class StackEdit
{
    constructor()
    {
        // const { iif, Subject } = Rx;
    }

    startStackEdit()
    {
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

        const stackEdit$ = fromEvent(window, 'message')
            .pipe(
                filter(event => event.origin === 'https://stackedit.io'),
                map(event => event.data),
                tap(data => console.log(data)),
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
    }
}
