import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { Nivel1Component } from './components/nivel1/nivel1.component';
import { Nivel2Component } from './components/nivel2/nivel2.component';
import { ExplicacionComponent } from './components/explicacion/explicacion.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'actividad-1', component:Nivel1Component},
  { path: 'actividad-2', component:Nivel2Component},
  { path: 'explicacion', component:ExplicacionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
