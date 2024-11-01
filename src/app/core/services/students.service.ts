import { Injectable } from '@angular/core';
import { IStudent } from '../models';
import { concatMap, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  private baseURL = environment.apiBaseUrl;

  constructor(
    private httpClient: HttpClient,
  ) { }

  getStudent(id: string):Observable<IStudent | null> {
    return this.httpClient.get<IStudent>(`${this.baseURL}/students/${id}`);
  }

  getStudents(): Observable<IStudent[]> {
    return this.httpClient.get<IStudent[]>(`${this.baseURL}/students`);
  }

  createStudent(student: Omit<IStudent, 'id'>): Observable<IStudent> {
    return this.httpClient.post<IStudent>(`${this.baseURL}/students`, {
      ...student,
    });
  }

  updateStudents(id: number, update: Partial<IStudent>) {
    return this.httpClient
      .patch<IStudent>(`${this.baseURL}/students/${id}`, update)
      .pipe(concatMap(() => this.getStudents()));
  }

  deleteStudent(id: number): Observable<IStudent[]> {
    return this.httpClient
      .delete<void>(`${this.baseURL}/students/${id}`)
      .pipe(concatMap(() => this.getStudents()));
  }
}
