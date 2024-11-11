import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// COMPONENTS
import { StudentTableComponent } from './students-table/student-table.component';
import { CoursesTableComponent } from './courses-table/courses-table.component';
import { StudentProfileComponent } from './student-profile/student-profile.component';
import { ClassAssignmentComponent } from './class-assignment/class-assignment.component';
import { UserTableComponent } from './users-table/user-table.component';
import { roleGuard } from '../../core/guards/role.guard';

const routes: Routes = [
  {
    path: 'students',
    component: StudentTableComponent,
    loadChildren: () =>
      import('./students-table/student-table.module').then(
        (m) => m.StudentTableModule
      ),
  },
  {
    path: 'students/:id',
    component: StudentProfileComponent,
    loadChildren: () =>
      import('./student-profile/student-profile.module').then(
        (m) => m.StudentProfileModule
      ),
  },
  {
    path: 'courses',
    component: CoursesTableComponent,
    loadChildren: () =>
      import('./courses-table/courses-table.module').then(
        (m) => m.CoursesTableModule
      ),
  },
  {
    path: 'assignments',
    component: ClassAssignmentComponent,
    loadChildren: () =>
      import('./class-assignment/class-assignment.module').then(
        (m) => m.ClassAssignmentModule
      ),
  },
  {
    path: 'users',
    component: UserTableComponent,
    canActivate: [roleGuard],
    loadChildren: () =>
      import('./users-table/user-table.module').then(
        (m) => m.UserTableModule
      ),
  },
  {
    path: '**',
    redirectTo: 'students'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
