import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcercadeComponent } from './acercade/acercade.component';
import { ContactoComponent } from './contacto/contacto.component';
import { InicioComponent } from './inicio/inicio.component';
import { RecomendacionesComponent } from './recomendaciones/recomendaciones.component';

const routes: Routes = [
  {path: "inicio", component: InicioComponent},
  {path: "recomendaciones", component: RecomendacionesComponent},
  {path: "acercade", component: AcercadeComponent},
  {path: "contacto", component: ContactoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
