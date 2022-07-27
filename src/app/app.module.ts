import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  //Todo: Declaraciones, directivas, componentes, pipes, etc.
  //! Si no es modulo se puede declarar(declarations)
  declarations: [
    AppComponent
  ],
  //Todo: Solo se importan otros modulos
  //! Si es un modulo se importa
  imports: [ 
    BrowserModule,
    AppRoutingModule
  ],
  //*Se puede exportar lo que uno declaro(declarations)
  exports:[],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
