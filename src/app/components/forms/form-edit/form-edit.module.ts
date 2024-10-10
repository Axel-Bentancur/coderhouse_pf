import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormEditRoutingModule } from './form-edit-routing.module';
import { FormEditComponent } from './form-edit.component';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [FormEditComponent],
  imports: [
    CommonModule,
    FormEditRoutingModule,
    MatIconModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
  ],
  exports: [FormEditComponent]
})
export class FormEditModule { }
