
// Rutas.
import { RouterModule, Routes } from '@angular/router';
// Paginas
import { PagesComponent } from './pages/pages.component';
// Componentes
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
import { Npf400Component } from './shared/npf400/npf400.component';

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: '**', component: Npf400Component }
];
export const APP_ROUTES = RouterModule.forRoot(appRoutes, { useHash: true });