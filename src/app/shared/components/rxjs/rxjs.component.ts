import { Component } from '@angular/core';
import { filter, map, of } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent {

  constructor() {
    const myObservable = of(0,1,2,3,4,5,6,7,9,10);
    // const myObserver = {
    //   next: (x:number) => console.log(x),
    //   error: (error: Error) => console.log(error),
    //   complete: () => console.log('Trasmissione terminata')
    // }

    const mySubscription = myObservable.pipe(
          map(x => x * 3) ,
          filter( x => x % 2 === 0) )
      .subscribe(
      x => console.log(x)
    );
  }


}
