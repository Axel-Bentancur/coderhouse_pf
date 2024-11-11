import { Injectable } from '@angular/core';
import { ICourse, IStudent } from '../models';
import { concatMap, map, Observable, of, switchMap, throwError } from 'rxjs';
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

  createCourse(course: Omit<ICourse, 'id'>): Observable<ICourse[]> {
    return this.httpClient.post<ICourse>(`${this.baseURL}/courses`, course).pipe(
      concatMap(() => this.getCourses())
    );
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

  addStudentToCourse(courseId: string, studentId: string): Observable<ICourse[]> {
    return this.httpClient.get<ICourse>(`${this.baseURL}/courses/${courseId}`).pipe(
      switchMap(course => {
        if (course) {
          if (!course.studentsList) {
            course.studentsList = [];
          }
          const studentExists = course.studentsList.some(student => student.id === studentId);
          if (!studentExists) {
            return this.httpClient.get<IStudent>(`${this.baseURL}/students/${studentId}`).pipe(
              switchMap(newStudent => {
                course.studentsList.push(newStudent);
                return this.httpClient.patch<ICourse>(`${this.baseURL}/courses/${courseId}`, { studentsList: course.studentsList });
              }),
              switchMap(() => this.httpClient.get<ICourse[]>(`${this.baseURL}/courses`))
            );
          } else {
            return this.httpClient.get<ICourse[]>(`${this.baseURL}/courses`);
          }
        }
        return throwError(() => new Error('Course not found'));
      })
    );
  }

  deleteStudent(courseId: string, studentId: string): Observable<ICourse[]> {
    return this.httpClient.get<ICourse>(`${this.baseURL}/courses/${courseId}`).pipe(
      switchMap(course => {
        if (course) {
          course.studentsList = course.studentsList?.filter(student => student.id !== studentId) || [];
          return this.httpClient.patch<ICourse>(`${this.baseURL}/courses/${courseId}`, { studentsList: course.studentsList }).pipe(
            switchMap(() => this.httpClient.get<ICourse[]>(`${this.baseURL}/courses`))
          );
        }
        return throwError(() => new Error('Course not found'));
      })
    );
  }
}
