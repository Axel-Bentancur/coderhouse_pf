import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentsService } from '../../../core/services/students.service';
import { IStudent } from '../../../core/models';

@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrl: './student-profile.component.scss'
})
export class StudentProfileComponent implements OnInit {
  idUsuario?: string;
  student: IStudent | null = null;
  isLoading = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private studentsService: StudentsService) {
      this.idUsuario = activatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.loadStudent()
  }

  loadStudent(): void {
    this.isLoading = true;
    this.studentsService.getStudent(this.activatedRoute.snapshot.params['id']).subscribe({
      next: (user: IStudent | null) => {
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
