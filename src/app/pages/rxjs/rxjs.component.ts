import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent {

  constructor() {

    // let i = -1;

    // const obs$ = new Observable<number>(observer => {

    //   const intervalo = setInterval(() => {

    //     i++;
    //     observer.next(i);

    //     if (i == 4) {
    //       clearInterval(intervalo);
    //       observer.complete();
    //     }

    //     if (i == 2) {
    //       observer.error('i llego al valor 2');
    //     }


    //   }, 1000)
    // });

    // obs$
    //   .pipe(
    //     retry()
    //   )
    //   .subscribe(
    //     valor => console.log("sus", valor),
    //     error => console.error("Error", error),
    //     () => console.info("Obs$ Terminado")
    //   );

    this.retornaObservable()
      .pipe(
        retry()
      )
      .subscribe(
        valor => console.log("sus", valor),
        error => console.error("Error", error),
        () => console.info("Obs$ Terminado")
      );

  }

  retornaObservable(): Observable<number> {
    let i = -1;
    //const obs$ = new Observable<number>(observer

    return new Observable<number>(observer => {

      const intervalo = setInterval(() => {

        i++;
        observer.next(i);

        if (i == 4) {
          clearInterval(intervalo);
          observer.complete();
        }

        if (i == 2) {
          observer.error('i llego al valor 2');
        }


      }, 1000)
    });

    //return obs$;

  }
}
