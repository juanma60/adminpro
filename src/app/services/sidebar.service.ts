import { Injectable, AbstractType } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any = [
    {
      titulo: "Principal",
      icono: "fa fa-plus",
      submenu: [
        { titulo: "Dashboard", url: "/dashboard" },
        { titulo: "ProgresBar", url: "/progress" },
        { titulo: "Gráficas", url: "/graficas1" },
        { titulo: "Promesas", url: "/promesas" },
        { titulo: 'RxJs', url: "/rxjs" }
      ]
    },
    {
      titulo: "Catálogos",
      icono: "fa fa-user",
      submenu: [
        { titulo: "Dashboard", url: "/dashboard" },
        { titulo: "ProgresBar", url: "/progress" },
        { titulo: "Gráficas", url: "/graficas1" },
        { titulo: "Promesas", url: "/promesas" },
        { titulo: 'RxJs', url: "/rxjs" }
      ]
    }

  ]


  constructor() { }
}
