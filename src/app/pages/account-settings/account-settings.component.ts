import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: [
  ]
})
export class AccountSettingsComponent implements OnInit {

  constructor(public _ajustes: SettingsService) {
    //document.getElementById('id_tituloPagina').innerHTML = "Configurar";
  }

  ngOnInit(): void {
    this.colocarCheck();
  }

  tema(tema: string, link: any) {

    this.aplicarCheck(link);
    this._ajustes.aplicarTema(tema);
  }

  aplicarCheck(link: any) {

    let selectores: any = document.getElementsByClassName('selector');

    for (let ref of selectores) { // Barrer los selectores
      ref.classList.remove('working');
    }

    link.classList.add('working');
  }

  colocarCheck() {

    console.log("colocar check");

    let selectores: any = document.getElementsByClassName('selector');
    let tema = this._ajustes.ajustes.tema;

    for (let ref of selectores) {
      if (ref.getAttribute('data-theme') === tema) {
        ref.classList.add('working');
        break;
      }
    }

  }


}
