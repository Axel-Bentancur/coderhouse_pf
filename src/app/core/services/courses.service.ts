import { Injectable } from '@angular/core';
import { ICourse, IStudent } from '../models';
import { concatMap, Observable, of, switchMap, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private baseURL = environment.apiBaseUrl;

  constructor(
    private httpClient: HttpClient,
  ) { }

  getCourse(id: string):Observable<ICourse | null> {
    return this.httpClient.get<ICourse>(`${this.baseURL}/courses/${id}`);
  }

  getCourses():Observable<ICourse[]> {
    return this.httpClient.get<ICourse[]>(`${this.baseURL}/courses`);
  }

  createCourse(course: Omit<ICourse, 'id'>): Observable<ICourse> {
    return this.httpClient.post<ICourse>(`${this.baseURL}/courses`, {
      ...course,
    });
  }

  updateCourse(id: string, update: Partial<ICourse>) {
    return this.httpClient
      .patch<ICourse>(`${this.baseURL}/courses/${id}`, update)
      .pipe(concatMap(() => this.getCourses()));
  }

  deleteCourse(id: string): Observable<ICourse[]> {
    return this.httpClient
      .delete<void>(`${this.baseURL}/courses/${id}`)
      .pipe(concatMap(() => this.getCourses()));
  }

  addStudentToCourse(courseId: string, studentId: string): Observable<ICourse> {
    return this.httpClient.get<ICourse>(`${this.baseURL}/courses/${courseId}`).pipe(
      switchMap(course => {
        if (course) {
          if (!course.studentList || course.studentList.length === 0) {
            course.studentList = [];
          }
          const studentExists = course.studentList.some(student => student.id === studentId);
          if (!studentExists) {
            return this.httpClient.get<IStudent>(`${this.baseURL}/students/${studentId}`).pipe(
              switchMap(newStudent => {
                course.studentList.push(newStudent);
                return this.httpClient.patch<ICourse>(`${this.baseURL}/courses/${courseId}`, { studentList: course.studentList });
              })
            );
          } else {
            return of(course);
          }
        }
        return throwError('Course not found');
      })
    );
  }


  deleteStudent(courseId: string, studentId: string): Observable<ICourse> {
    return this.httpClient.get<ICourse>(`${this.baseURL}/courses/${courseId}`).pipe(
      switchMap(course => {
        if (course) {
          if (course.studentList) {
            course.studentList = course.studentList.filter(student => student.id !== studentId);
          } else {
            course.studentList = [];
          }
          return this.httpClient.patch<ICourse>(`${this.baseURL}/courses/${courseId}`, { studentList: course.studentList });
        }
        return throwError('Course not found');
      })
    );
  }

}
