import { Component } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators'

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent {

  tituloPagina: string;

  constructor(private router: Router) {
    //let tituloPagina = JSON.parse(localStorage.getItem('ls_tituloPagina'));
    this.tituloAsignar();
  }

  tituloAsignar() {

    this.router.events
      .pipe(
        filter(event => event instanceof ActivationEnd),
        filter((event: ActivationEnd) => event.snapshot.firstChild === null),
        map((event: ActivationEnd) => event.snapshot.data)
      )
      .subscribe(data => {
        console.log(data);
        console.log('TITULO: ' + this.tituloPagina);
        this.tituloPagina = data.tituloPagina;
        console.log('TITULO: ' + this.tituloPagina);
      })
  }


}
