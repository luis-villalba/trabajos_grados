import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContenidoanteproyectoComponent } from './modulos/contenido/contenidoanteproyecto/contenidoanteproyecto.component';
import { ContregistroantComponent } from './modulos/contenido/contregistroant/contregistroant.component';


const routes: Routes = [
  {
    path: '', loadChildren: () => import('./modulos/home/home.module').then(m => m.HomeModule)
  },
  {
    path: '', loadChildren: () => import('./modulos/contenido/contenido.module').then(m => m.ContenidoModule)
  },
  {
    path:'contregistroant',component: ContregistroantComponent
  },
  {
    path:'contenidoanteproyecto',component: ContenidoanteproyectoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
