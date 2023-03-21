import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HomeheaderComponent } from './homeheader/homeheader.component';
import { HomeloginComponent } from './homelogin/homelogin.component';
import { HomecarrucelComponent } from './homecarrucel/homecarrucel.component';
import { HomefooterComponent } from './homefooter/homefooter.component';


@NgModule({
  declarations: [
    HomeComponent,
    HomeheaderComponent,
    HomeloginComponent,
    HomecarrucelComponent,
    HomefooterComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
