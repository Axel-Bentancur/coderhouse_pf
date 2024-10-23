import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// COMPONENTS
import { StudentTableComponent } from '../../components/students-table/student-table.component';
import { CoursesTableComponent } from '../../components/courses-table/courses-table.component';
import { StudentProfileComponent } from '../../components/student-profile/student-profile.component';
import { ClassAssignmentComponent } from '../../components/class-assignment/class-assignment.component';

const routes: Routes = [
  {
    path: 'students',
    component: StudentTableComponent,
  },
  {
    path: 'students/:id',
    component: StudentProfileComponent,
  },
  {
    path: 'courses',
    component: CoursesTableComponent,
  },
  {
    path: 'assignments',
    component: ClassAssignmentComponent,
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
