import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// COMPONENTS
import { DashboardComponent } from './dashboard.component';

// MODULES
import { ToolbarModule } from './toolbar/toolbar.module';
import { SidenavModule } from './sidenav/sidenav.module';
import { SharedModule } from '../../shared/shared.module';
import { DashboardRoutingModule } from './dashboard-routing.module';


@NgModule({
  declarations: [
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    DashboardRoutingModule,

    ToolbarModule,
    SidenavModule,
  ]
})
export class DashboardModule { }
