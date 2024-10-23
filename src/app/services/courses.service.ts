import { Injectable } from '@angular/core';
import { COURSE_DATA, COURSES_DATA, COURSES_SUMMARY_DATA, STUDENTS_SUMMARY_DATA } from '../mockdata';
import { ICourse, ICourseSummary, IStudentSummary } from '../models';
import { delay, Observable, of } from 'rxjs';

let DB_COURSE_DATA: ICourse = COURSE_DATA
let DB_COURSES_DATA: ICourse[] = COURSES_DATA;
let DB_COURSES_SUMMARY_DATA: ICourseSummary[] = COURSES_SUMMARY_DATA;

let DB_STUDENTS_SUMMARY_DATA: IStudentSummary[] = STUDENTS_SUMMARY_DATA;

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor() { }

  getSummaryCourses(): Observable<ICourseSummary[]> {
    return of(DB_COURSES_SUMMARY_DATA).pipe(delay(3000));
    //return of(DB_COURSES_SUMMARY_DATA) -- without interval
  }

  getCourse():Observable<ICourse> {
    return of(DB_COURSE_DATA).pipe(delay(3000))
    //return of(STUDENT) -- without interval
  }

  getCourses():Observable<ICourse[]> {
    return of(DB_COURSES_DATA).pipe(delay(3000))
    //return of(DB_COURSES_DATA) -- without interval
  }

  createCourse(course: ICourse) {
    const newId = Math.floor(100 + Math.random() * 900);
    DB_COURSES_DATA = [
      ...DB_COURSES_DATA,
      {
        ...course,
        id: newId
      }
    ];

    return of(DB_COURSES_DATA).pipe(delay(500))
  }

  updateCourse(id: number, update: Partial<ICourse>) {
    DB_COURSES_DATA = DB_COURSES_DATA.map((course) =>
      course.id === id ? { ...course, ...update } : course
    );

    return of(DB_COURSES_DATA).pipe(delay(1000))
  }

  deleteCourse(id: number): Observable<ICourse[]> {
    DB_COURSES_DATA = DB_COURSES_DATA.filter(course => course.id !== id);
    return of(DB_COURSES_DATA).pipe(delay(1000))
  }

  addStudent(courseId: number, studentId: number): Observable<ICourseSummary[]> {
    const course = DB_COURSES_SUMMARY_DATA.find(course => course.id === courseId);
    const newStudent = DB_STUDENTS_SUMMARY_DATA.find(student => student.id === studentId);

    if (course && course.studentList && newStudent) {
      const studentExists = course.studentList.some(student => student.id === studentId);

      if (!studentExists) {
        course.studentList.push(newStudent);
      }
    }

    return of(DB_COURSES_SUMMARY_DATA).pipe(delay(1000));
  }

  deleteStudent(courseId: number, studentId: number): Observable<ICourseSummary[]> {
    const course = DB_COURSES_SUMMARY_DATA.find(course => course.id === courseId);
    if (course && course.studentList) {
      course.studentList = course.studentList.filter(student => student.id !== studentId);
    }
    return of(DB_COURSES_SUMMARY_DATA).pipe(delay(1000));
  }
}
