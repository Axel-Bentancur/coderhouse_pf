import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleSizeDirectiveDirective } from './directives/title-size-directive.directive';
import { UserFullNamePipe } from './pipes/user-full-name.pipe';
import { UserPhoneNumberPipe } from './pipes/user-phone-number.pipe';



@NgModule({
  declarations: [
    TitleSizeDirectiveDirective,
    UserFullNamePipe,
    UserPhoneNumberPipe,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TitleSizeDirectiveDirective,
    UserFullNamePipe,
    UserPhoneNumberPipe,
  ]
})
export class SharedModule { }
