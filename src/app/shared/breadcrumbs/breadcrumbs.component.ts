import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent implements OnInit {

  @Input() tituloPagina: string = "Titulo de la página";

  constructor() {
    let tituloPagina = JSON.parse(localStorage.getItem('ls_tituloPagina'));
  }

  ngOnInit(): void {
  }

}
