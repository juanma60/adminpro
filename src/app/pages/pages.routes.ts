import { RouterModule, Routes } from '@angular/router';
// Componentes
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';

const pagesRoutes: Routes = [
    {
        path: '', component: PagesComponent,
        children: [
            { path: 'dashboard', component: DashboardComponent, data: { tituloPagina: 'Dashboard' } },
            { path: 'progress', component: ProgressComponent, data: { tituloPagina: 'Barra de progreso' } },
            { path: 'graficas1', component: Graficas1Component, data: { tituloPagina: 'Gráfica' } },
            { path: 'account-settings', component: AccountSettingsComponent, data: { tituloPagina: 'Configuración' } },
            { path: 'promesas', component: PromesasComponent, data: { tituloPagina: 'Promesas' } },
            { path: 'rxjs', component: RxjsComponent, data: { tituloPagina: 'RxJs' } },
            { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
        ]
    },
];
export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);
