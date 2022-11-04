import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { EncabezadoComponent } from './componente/encabezado/encabezado.component';
import { FormularioComponent } from './componente/formulario/formulario.component';
import { PieComponent } from './componente/pie/pie.component';
import { PrincipalComponent } from './paginas/principal/principal.component';
import { ContactenosComponent } from './paginas/contactenos/contactenos.component';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    FormularioComponent,
    PieComponent,
    PrincipalComponent,
    ContactenosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
