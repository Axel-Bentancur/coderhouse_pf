import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

import { UsersTableRoutingModule } from './users-table-routing.module';
import { UsersTableComponent } from './users-table.component';
import { ModalModule } from '../modal/modal.module';
import { MatTableModule } from '@angular/material/table';
import { UserFullNamePipe } from '../../shared/pipes/user-full-name.pipe';
import { UserPhoneNumberPipe } from '../../shared/pipes/user-phone-number.pipe';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { TitleSizeDirectiveDirective } from '../../shared/directives/title-size-directive.directive';



@NgModule({
  declarations: [
    UsersTableComponent,
    UserFullNamePipe,
    UserPhoneNumberPipe,
    TitleSizeDirectiveDirective,
  ],
  imports: [
    CommonModule,
    UsersTableRoutingModule,
    MatTableModule,
    MatIconModule,
    ModalModule,
    MatDialogModule,
    MatButtonModule,
  ],
  exports: [UsersTableComponent]
})
export class UsersTableModule { }
