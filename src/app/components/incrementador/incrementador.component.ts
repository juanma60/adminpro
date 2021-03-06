import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: []
})
export class IncrementadorComponent implements OnInit {

  @ViewChild('txtProgreso') txtProgreso: ElementRef;

  @Input() leyenda: string = "Leyenda";
  @Input() progreso: number = 50;

  @Output() cambioValor: EventEmitter<number> = new EventEmitter;

  constructor() { }

  ngOnInit(): void { }

  onChanges(newValue: number) {

    //let elemHTML = document.getElementsByName("progreso")[0];
    if (newValue > 100) {
      this.progreso = 100;
    }
    if (newValue < 0) {
      this.progreso = 0;
    }

    //elemHTML.value = this.progreso;
    this.txtProgreso.nativeElement.value = this.progreso;

    this.cambioValor.emit(this.progreso);
  }


  cambiarValor(valor: number) {

    if ((valor > 0 && this.progreso < 100) || (valor < 0 && this.progreso > 0)) {
      this.progreso += valor;
      this.cambioValor.emit(this.progreso);
      this.txtProgreso.nativeElement.focus();
    }
  }

}
