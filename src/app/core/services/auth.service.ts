import { Injectable } from "@angular/core";
import { AuthData, IUser } from "../models";
import { Observable } from "rxjs";
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { map } from 'rxjs';
import { Store } from "@ngrx/store";
import { AuthActions } from "../../features/auth/store/auth.actions";
import { selectAuthenticatedUser } from "../../features/auth/store/auth.selectors";

@Injectable ({ providedIn: 'root'})
export class AuthService {

  public authUser$: Observable<IUser | null>
  private baseURL = environment.apiBaseUrl;

  private handleAuthentication(users: IUser[]): IUser | null {
    if(!!users[0]){
      this.store.dispatch(AuthActions.setAuthenticatedUser({user: users[0]}))
      localStorage.setItem('token', users[0].token);
      return users[0];
    } else {
      return null
    }
  }

  constructor(
    private router: Router,
    private httpClient: HttpClient,
    private store: Store
  ){
    this.authUser$ = this.store.select(selectAuthenticatedUser)
  }


  login(data: AuthData): Observable<IUser> {
    return this.httpClient.get<IUser[]>(
      `${this.baseURL}/users?email=${data.email}&password=${data.password}`)
      .pipe(
        map((users)=> {
          const user = this.handleAuthentication(users)
          if(user){
            return user;
          } else {
            throw new Error('Invalid Data');
          }
        })
      )
  }

  logout(){
    this.store.dispatch(AuthActions.unsetAuthenticatedUser())
    this.router.navigate(['auth'])
    localStorage.removeItem('token')
  }

  verifyToken(): Observable<boolean> {
    return this.httpClient.get<IUser[]>(
      `${this.baseURL}/users?token=${localStorage.getItem('token')}`
    ).pipe(
      map((users)=> {
        const user = this.handleAuthentication(users);
        return !!user;
      })
    )
  }

  getUserRole(): Observable<boolean> {
    return this.authUser$.pipe(
      map(user => user ? user.role === 'ADMIN' : false)
    );
  }
}
