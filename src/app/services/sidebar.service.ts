import { Injectable, AbstractType } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any = [
    {
      titulo: 'Principal',
      icono: 'mdi mdi-menu-right',
      submenu: [
        { titulo: 'Dashboard', url: '/dashboard' },
        { titulo: 'ProgresBar', url: '/progress' },
        { titulo: 'Gráficas1', url: '/graficas1' }
      ]
    }

  ]


  constructor() { }
}
