import { Injectable } from '@angular/core';
import { IUser } from '../models';
import { concatMap, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private baseURL = environment.apiBaseUrl;

  constructor(
    private httpClient: HttpClient,
  ) { }

  private generateToken(firstName: string, lastName: string): string {
    const header = btoa('{"alg":"HS256","typ":"JWT"}');
    const payload = btoa(`${firstName}${lastName}`);
    return `${header}.${payload}`;
  }

  getUser(id: string):Observable<IUser | null> {
    return this.httpClient.get<IUser>(`${this.baseURL}/users/${id}`);
  }

  getUsers(): Observable<IUser[]> {
    return this.httpClient.get<IUser[]>(`${this.baseURL}/users`);
  }

  createUser(user: Omit<IUser, "id" | "token">): Observable<IUser[]> {
    const userWithToken = {
      ...user,
      token: this.generateToken(user.firstName, user.lastName)
    };

    return this.httpClient.post<IUser>(`${this.baseURL}/users`, userWithToken).pipe(
      concatMap(() => this.getUsers())
    );
  }

  updateUsers(id: string, update: Partial<IUser>) {
    return this.httpClient
      .patch<IUser>(`${this.baseURL}/users/${id}`, update)
      .pipe(concatMap(() => this.getUsers()));
  }

  deleteUser(id: string): Observable<IUser[]> {
    return this.httpClient
      .delete<void>(`${this.baseURL}/users/${id}`)
      .pipe(concatMap(() => this.getUsers()));
  }
}
