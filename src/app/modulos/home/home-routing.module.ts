import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContenidoComponent } from '../contenido/contenido.component';

import { HomeComponent } from './home.component';
const routes: Routes = [
  {path: '', component: HomeComponent },
  { path: 'contenido', component: ContenidoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
