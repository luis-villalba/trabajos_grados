import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './modulos/home/home.component';
import { HomeModule } from './modulos/home/home.module';
import { HomefooterComponent } from './modulos/home/homefooter/homefooter.component';
import { ContenidoComponent } from './modulos/contenido/contenido.component';
import { ContenidoModule } from './modulos/contenido/contenido.module';

@NgModule({
  declarations: [
    AppComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
