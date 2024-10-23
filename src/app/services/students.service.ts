import { Injectable } from '@angular/core';
import { STUDENT_DATA, STUDENTS_DATA, STUDENTS_SUMMARY_DATA } from '../mockdata';
import { IStudent, IStudentSummary } from '../models';
import { delay, Observable, of } from 'rxjs';

let DB_STUDENT_DATA: IStudent = STUDENT_DATA
let DB_STUDENTS_DATA: IStudent[] = STUDENTS_DATA;
let DB_STUDENTS_SUMMARY_DATA: IStudentSummary[] = STUDENTS_SUMMARY_DATA;

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor() { }

  getSummaryStudents(): Observable<IStudentSummary[]> {
    return of(DB_STUDENTS_SUMMARY_DATA).pipe(delay(3000));
    //return of(DB_COURSE) -- without interval
  }

  getStudent():Observable<IStudent> {
    return of(DB_STUDENT_DATA).pipe(delay(3000))
    //return of(DB_STUDENT_DATA) -- without interval
  }

  getStudents():Observable<IStudent[]> {
    return of(DB_STUDENTS_DATA).pipe(delay(3000))
    //return of(DB_STUDENTS_DATA) -- without interval
  }

  createStudent(student: IStudent) {
    const newId = Math.floor(100 + Math.random() * 900);
    DB_STUDENTS_DATA = [
      ...DB_STUDENTS_DATA,
      {
        ...student,
        id: newId
      }
    ];

    return of(DB_STUDENTS_DATA).pipe(delay(500))
  }

  updateStudents(id: number, update: Partial<IStudent>) {
    DB_STUDENTS_DATA = DB_STUDENTS_DATA.map((user) =>
      user.id === id ? { ...user, ...update } : user
    );

    return of(DB_STUDENTS_DATA).pipe(delay(1000))
  }

  deleteStudent(id: number): Observable<IStudent[]> {
    DB_STUDENTS_DATA = DB_STUDENTS_DATA.filter(user => user.id !== id);
    return of(DB_STUDENTS_DATA).pipe(delay(1000))
  }
}
