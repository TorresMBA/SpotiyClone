import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { InjectSessionInterceptor } from '@core/interceptors/inject-session.interceptor';
import { CookieService } from 'ngx-cookie-service';

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
    AppRoutingModule,
    HttpClientModule,
  ],
  //*Se puede exportar lo que uno declaro(declarations)
  exports:[],
  providers: [
    CookieService,
    { 
      provide: HTTP_INTERCEPTORS,
      useClass: InjectSessionInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
