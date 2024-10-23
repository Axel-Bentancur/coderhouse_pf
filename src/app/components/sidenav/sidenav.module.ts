import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavRoutingModule } from './sidenav-routing.module';

// COMPONENTS
import { SidenavComponent } from './sidenav.component';

// MODULES
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';



@NgModule({
  declarations: [
    SidenavComponent
  ],
  imports: [
    CommonModule,
    SidenavRoutingModule,

    MatIconModule,
    MatButtonModule,
    MatSidenavModule
  ],
  exports: [SidenavComponent]
})
export class SidenavModule { }
