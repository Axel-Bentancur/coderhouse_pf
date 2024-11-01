import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// COMPONENTS
import { SidenavComponent } from './sidenav.component';

// MODULES
import { SharedModule } from '../../../shared/shared.module';
import { SidenavRoutingModule } from './sidenav-routing.module';



@NgModule({
  declarations: [
    SidenavComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    SidenavRoutingModule,
  ],
  exports: [SidenavComponent]
})
export class SidenavModule { }
