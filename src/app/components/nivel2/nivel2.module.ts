import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Nivel2Component } from './nivel2.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [Nivel2Component],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [NgbActiveModal]
})
export class Nivel2Module { }
