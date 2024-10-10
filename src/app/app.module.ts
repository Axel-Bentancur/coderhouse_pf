import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { UserFullNamePipe } from './shared/pipes/user-full-name.pipe';
import { UserPhoneNumberPipe } from './shared/pipes/user-phone-number.pipe';
import { TitleSizeDirectiveDirective } from './shared/directives/title-size-directive.directive';
import { DashboardModule } from './features/dashboard/dashboard.module';



@NgModule({
  declarations: [
    AppComponent,
    /* UsersTableComponent,
    ModalComponent,
    FormEditComponent,
    DashboardComponent,
    UserFullNamePipe,
    UserPhoneNumberPipe,
    TitleSizeDirectiveDirective */
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DashboardModule,
    /* MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatTableModule,
    MatDialogModule,
     */
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
