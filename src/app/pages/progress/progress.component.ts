import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: [
  ]
})
export class ProgressComponent implements OnInit {

  progreso1: number = 5;
  progreso2: number = 95;

  constructor() {
    //document.getElementById('id_tituloPagina').innerHTML = 'Barra de progreso';
  }

  ngOnInit(): void {
  }

}
