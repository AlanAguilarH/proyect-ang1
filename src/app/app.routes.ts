import { RouterModule, Routes } from "@angular/router";
import { BodyComponent } from "./components/body/body.component";
import { Ejemplo1Component } from './components/ejemplo1/ejemplo1.component';
import { Ejemplo2Component } from './components/ejemplo2/ejemplo2.component';
import { Ejemplo3Component } from './components/ejemplo3/ejemplo3.component';
import { HeaderComponent } from './components/header/header.component';
import { Ejemplocss1Component } from './components/ejemplocss1/ejemplocss1.component';
import { Ejemplotp1Component } from './components/ejemplotp1/ejemplotp1.component';
import { Ejemplotp2Component } from './components/ejemplotp2/ejemplotp2.component';
import { Ejemplotp3Component } from './components/ejemplotp3/ejemplotp3.component';
import { Ejemplotp4Component } from './components/ejemplotp4/ejemplotp4.component';

const APP_ROUTES: Routes = [
  { path: 'Inicio', component: HeaderComponent}, //home
  { path: 'ejemplo1', component: Ejemplo1Component},
  { path: 'ejemplo2', component: Ejemplo2Component},
  { path: 'ejemplo3', component: Ejemplo3Component},
  { path: 'ejemplotp1', component: Ejemplotp1Component},
  { path: 'ejemplotp2', component: Ejemplotp2Component},
  { path: 'ejemplotp3', component: Ejemplotp3Component},
  { path: 'ejemplotp4', component: Ejemplotp4Component},
  { path: 'body', component: BodyComponent},
  { path: 'ejemplocss1', component: Ejemplocss1Component},
  { path: '**', pathMatch: 'full', redirectTo: 'Inicio'}
  ];

  export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash:true});