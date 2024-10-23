import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// COMPONENTS
import { DashboardComponent } from './dashboard.component';

// MODULES
import { DashboardRoutingModule } from './dashboard-routing.module';
import { ToolbarModule } from '../../components/toolbar/toolbar.module';
import { SidenavModule } from '../../components/sidenav/sidenav.module';
import { StudentTableModule } from '../../components/students-table/student-table.module';
import { CoursesTableModule } from '../../components/courses-table/courses-table.module';
import { StudentProfileModule } from '../../components/student-profile/student-profile.module';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ClassAssignmentModule } from '../../components/class-assignment/class-assignment.module';


@NgModule({
  declarations: [
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,

    ToolbarModule,
    SidenavModule,
    StudentTableModule,
    CoursesTableModule,
    StudentProfileModule,
    ClassAssignmentModule,

    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
  ]
})
export class DashboardModule { }
