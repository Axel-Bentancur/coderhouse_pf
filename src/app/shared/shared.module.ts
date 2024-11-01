import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// DIRECTIVES
import { TitleSizeDirectiveDirective } from './directives/title-size-directive.directive';

// PIPES
import { UserFullNamePipe } from './pipes/user-full-name.pipe';
import { UserPhoneNumberPipe } from './pipes/user-phone-number.pipe';

// MODULES
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatChipsModule } from '@angular/material/chips';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';

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
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatTableModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatListModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    MatExpansionModule,
    MatChipsModule,
    MatCheckboxModule,
    MatRadioModule,

    TitleSizeDirectiveDirective,
    UserFullNamePipe,
    UserPhoneNumberPipe,
  ]
})
export class SharedModule { }
