import { fromEvent, interval, merge, NEVER } from 'rxjs';
import { setCount, startButton, pauseButton } from './utilities';

const start$ = fromEvent(startButton, 'click');
const pause$ = fromEvent(pauseButton, 'click');

// const count$ = interval(1000);
let interval$;

const pauseSub = start$.subscribe(() => {
  interval$ = interval(1000).subscribe(setCount);
});

pause$.subscribe((val) => interval$.unsubscribe());
