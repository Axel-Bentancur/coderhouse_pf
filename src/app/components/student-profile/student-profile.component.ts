import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../../services/students.service';
import { IStudent } from '../../models';

@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrl: './student-profile.component.scss'
})
export class StudentProfileComponent implements OnInit {
  student: IStudent | null = null;
  isLoading = false;

  constructor(private StudentsService: StudentsService) {
    console.log(this.student)
  }

  ngOnInit(): void {
    this.loadStudent()
  }

  loadStudent(): void {
    this.isLoading = true;
    this.StudentsService.getStudent().subscribe({
      next: (user: IStudent) => {
        this.student = user;
      },
      error: (err) => {
        console.error('Error loading student data:', err);
        this.isLoading = false;
      },
      complete: () => {
        this.isLoading = false;
      }
    });
  }

}
