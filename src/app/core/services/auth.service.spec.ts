import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { MockProvider } from 'ng-mocks';
import { NavigationExtras, Router } from '@angular/router';
import { IStudent, AuthData } from '../models';

const mockStudent: IStudent = {
  id: "A7hB",
  firstName: "Juandos",
  lastName: "Perez",
  address: "Calle Falsa 123",
  phone: "1234567891",
  email: "juan.perez@example.com",
  password: "SecurePass1!",
  token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.JuanPerez",
  photo: "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250",
  courses: []
};
const mockAuthData: AuthData = {
  email: "juan.perez@example.com",
  password: "SecurePass1!",
};

fdescribe('AuthService', () => {
  let service: AuthService;
  let httpContoller: HttpTestingController;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        AuthService,
        MockProvider(Router, {
          navigate: (commands: any[], extras?: NavigationExtras) => {
            return new Promise((res) => res(true));
          },
        }),
      ],
    });

    httpContoller = TestBed.inject(HttpTestingController);
    service = TestBed.inject(AuthService);
    router = TestBed.inject(Router);
    localStorage.clear();
  });

  it('The service should be properly defined', () => {
    expect(service).toBeTruthy();
  });

  it('The login process should store the token in localStorage', (done) => {
    service.login(mockAuthData).subscribe({
      next: (user) => {
        expect(user).toEqual(mockStudent);
        expect(localStorage.getItem('token')).toEqual(mockStudent.token);
        done();
      },
    });
    const mockReq = httpContoller.expectOne({
      url: `${service['baseURL']}/students?email=${mockAuthData.email}&password=${mockAuthData.password}`,
      method: 'GET',
    });
    mockReq.flush([mockStudent]);
  });

  it('It should return an error for invalid login attempts', (done) => {
    service.login(mockAuthData).subscribe({
      error: (err) => {
        expect(err).toBeInstanceOf(Error);
        expect(err['message']).toBe('Invalid Data');
        done();
      },
    });

    const mockReq = httpContoller.expectOne({
      url: `${service['baseURL']}/students?email=${mockAuthData.email}&password=${mockAuthData.password}`,
      method: 'GET',
    });
    mockReq.flush([]);
  });

  it('The logout function should remove the token from localStorage, clear the authenticated user, and redirect to /auth', (done) => {
    const spyOnNavigate = spyOn(router, 'navigate');

    service.login(mockAuthData).subscribe();
    const mockReq = httpContoller.expectOne({
      url: `${service['baseURL']}/students?email=${mockAuthData.email}&password=${mockAuthData.password}`,
      method: 'GET',
    });
    mockReq.flush([mockStudent]);

    service.logout();
    expect(localStorage.getItem('token')).toBeNull();
    service.authUser$.subscribe({
      next: (user) => {
        expect(user).toBeNull();
        done();
      },
    });

    expect(spyOnNavigate).toHaveBeenCalledOnceWith(['auth']);
  });
});
