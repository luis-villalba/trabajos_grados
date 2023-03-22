import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { HomefooterComponent } from '../home/homefooter/homefooter.component';
import { ContenidoComponent } from './contenido.component';

const routes: Routes = [
  { path: 'contenido', component: ContenidoComponent },
  {path: '', component: HomeComponent },
  {
    path:'homefooter', component: HomefooterComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContenidoRoutingModule { }
