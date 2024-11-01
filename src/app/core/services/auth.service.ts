import { Injectable } from "@angular/core";
import { AuthData, IStudent } from "../models";
import { BehaviorSubject, Observable, of, throwError } from "rxjs";
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { map } from 'rxjs';

@Injectable ({ providedIn: 'root'})
export class AuthService {

  private _authUser$ = new BehaviorSubject<null | IStudent>(null);
  public authUser$ = this._authUser$.asObservable();
  private baseURL = environment.apiBaseUrl;

  private handleAuthentication(students: IStudent[]): IStudent | null {
    if(!!students[0]){
      this._authUser$.next(students[0]);
      localStorage.setItem('token', students[0].token);
      return students[0];
    } else {
      return null
    }
  }

  constructor(
    private router: Router,
    private httpClient: HttpClient
  ){}


  login(data: AuthData): Observable<IStudent> {
    return this.httpClient.get<IStudent[]>(
      `${this.baseURL}/students?email=${data.email}&password=${data.password}`)
      .pipe(
        map((students)=> {
          const student = this.handleAuthentication(students)
          if(student){
            return student;
          } else {
            throw new Error('Invalid Data');
          }
        })
      )
  }

  logout(){
    this._authUser$.next(null)
    this.router.navigate(['auth'])
    localStorage.removeItem('token')
  }

  verifyToken(): Observable<boolean> {
    return this.httpClient.get<IStudent[]>(
      `${this.baseURL}/students?token=${localStorage.getItem('token')}`
    ).pipe(
      map((students)=> {
        const student = this.handleAuthentication(students);
        return !!student;
      })
    )
  }
}
