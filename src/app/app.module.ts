import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'
import { LoginComponent } from './login/login.component'
import { Npf400Component } from './shared/npf400/npf400.component'
import { DashboardComponent } from './pages/dashboard/dashboard.component'
import { ProgressComponent } from './pages/progress/progress.component'
import { Graficas1Component } from './pages/graficas1/graficas1.component'
import { HeaderComponent } from './shared/header/header.component'
import { SidebarComponent } from './shared/sidebar/sidebar.component'
import { BreadcrumbsComponent } from './shared/breadcrumbs/breadcrumbs.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    Npf400Component,
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
    HeaderComponent,
    SidebarComponent,
    BreadcrumbsComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
