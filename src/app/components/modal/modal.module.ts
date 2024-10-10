import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalRoutingModule } from './modal-routing.module';
import { ModalComponent } from '../modal/modal.component';
import { FormEditModule } from '../forms/form-edit/form-edit.module';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [ModalComponent],
  imports: [
    CommonModule,
    ModalRoutingModule,
    FormEditModule,
    MatButtonModule,
  ],
  exports: [ModalComponent]
})
export class ModalModule { }
