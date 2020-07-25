import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: [
  ]
})
export class PromesasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    this.getUsuarios().then(usuarios => {
      console.log(usuarios);
    });

    // this.getUsuarios();

    // const promesa = new Promise((resolve, reject) => {
    //   if (false) {
    //     resolve("promesa resuelta.");
    //   } else {
    //     reject("Algo salio mal de seguro");
    //   }
    // });

    // promesa
    //   .then((mensaje) => {
    //     console.log(mensaje + " - Termine promesa");
    //   })
    //   .catch(error => console.log('Error en la promesa - ', error));

    // console.log("Fin del init");

  }

  getUsuarios() {


    return new Promise(resolve => {

      fetch('http://localhost/ci/api_supermandados/index.php/giros/all')
        .then(resp => resp.json())
        .then(body => console.log(body.data));

    });


    // const promesa = new Promise(resolve => {

    //   fetch('https://reqres.in/api/users')
    //     .then(resp => resp.json())
    //     .then(body => console.log(body.data));

    // });

    // return promesa;






    // fetch('https://reqres.in/api/users')
    //   .then(resp => resp.json())
    //   .then(body => console.log(body.data));

    // fetch('https://reqres.in/api/users')
    //   .then(resp => {
    //     resp.json().then(body => console.log(body))
    //   });


  }

}
