import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// COMPONENTS
import { FormEditUserComponent } from './form-edit-user.component';

// MODULES
import { SharedModule } from '../../../../shared/shared.module';


@NgModule({
  declarations: [FormEditUserComponent],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [FormEditUserComponent]
})
export class FormEditUserModule { }
