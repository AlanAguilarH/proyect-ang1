import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { APP_ROUTING } from './app.routes';

import { AppComponent } from './app.component';
import { BodyComponent } from './components/body/body.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { Ejemplo1Component } from './components/ejemplo1/ejemplo1.component';
import { Ejemplo2Component } from './components/ejemplo2/ejemplo2.component';
import { Ejemplo3Component } from './components/ejemplo3/ejemplo3.component';
import { HeaderComponent } from './components/header/header.component';
import { Ejemplocss1Component } from './components/ejemplocss1/ejemplocss1.component';
import { Ejemplocss2Component } from './components/ejemplocss2/ejemplocss2.component';
import { Ejemplocss3Component } from './components/ejemplocss3/ejemplocss3.component';
import { Ejemplocss4Component } from './components/ejemplocss4/ejemplocss4.component';
import { Ejemplotp1Component } from './components/ejemplotp1/ejemplotp1.component';
import { Ejemplotp2Component } from './components/ejemplotp2/ejemplotp2.component';
import { Ejemplotp3Component } from './components/ejemplotp3/ejemplotp3.component';
import { Ejemplotp4Component } from './components/ejemplotp4/ejemplotp4.component';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    NavbarComponent,
    Ejemplo1Component,
    Ejemplo2Component,
    Ejemplo3Component,
    HeaderComponent,
    Ejemplocss1Component,
    Ejemplocss2Component,
    Ejemplocss3Component,
    Ejemplocss4Component,
    Ejemplotp1Component,
    Ejemplotp2Component,
    Ejemplotp3Component,
    Ejemplotp4Component
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }