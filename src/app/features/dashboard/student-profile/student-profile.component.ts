import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentsService } from '../../../core/services/students.service';
import { ICourse, IStudent } from '../../../core/models';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrl: './student-profile.component.scss'
})
export class StudentProfileComponent implements OnInit {
  idUsuario?: string;
  coursesList: ICourse[] = [];
  student: IStudent | null = null;
  isLoading = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private studentsService: StudentsService,
    private router: Router,
  ) {
      this.idUsuario = activatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.loadStudent();
    this.loadCourses();
  }

  loadStudent(): void {
    this.isLoading = true;
    this.studentsService.getStudent(this.activatedRoute.snapshot.params['id']).subscribe({
      next: (user: IStudent | null) => {
        this.student = user;
      },
      error: (err) => {
        this.handleError(err);
        this.isLoading = false;
      },
      complete: () => {
        this.isLoading = false;
      }
    });
  }

  loadCourses(): void {
    if (this.idUsuario) {
      this.isLoading = true;
      this.studentsService.getCoursesByStudentId(this.idUsuario).subscribe({
        next: (courses: ICourse[]) => {
          this.coursesList = courses;
        },
        error: (err) => {
          this.handleError(err);
          this.isLoading = false;
        },
        complete: () => {
          this.isLoading = false;
        }
      });
    }
  }

  handleError(err: any): void {
    if (err instanceof Error) {
      console.error(`An unexpected error occurred: ${err.message}`);
    } else if (err instanceof HttpErrorResponse) {
      if (err.status === 0) {
        console.error('Could not connect to the server. Please check your network connection.');
      } else if (err.status >= 400 && err.status < 500) {
        console.error(`Client error: ${err.error?.message || 'Invalid request. Please try again.'}`);
      } else if (err.status >= 500) {
        console.error('Server error: Please try again later.');
      } else {
        console.error(`Unexpected error: ${err.statusText}`);
      }
    } else {
      console.error('An unknown error occurred. Please try again later.');
    }
  }

  goBack(): void {
    this.router.navigate(['/dashboard/students']);
  }

}
