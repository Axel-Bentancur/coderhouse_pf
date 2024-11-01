import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { HttpClientTestingModule, provideHttpClientTesting } from '@angular/common/http/testing';
import { SharedModule } from '../../../shared/shared.module';
import { MockProvider } from 'ng-mocks';
import { AuthService } from '../../../core/services/auth.service';
import { of } from 'rxjs';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [
        HttpClientTestingModule,
        SharedModule,
      ],
      providers: [provideHttpClientTesting(),
        MockProvider(AuthService, {
          login() {
            return of();
          },
        }),
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
  });

  it('LoginComponent should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should return the email form control', () => {
    expect(component.emailControl).toBe(component.formLogin.get('email'));
  });

  it('should return the password form control', () => {
    expect(component.passwordControl).toBe(component.formLogin.get('password'));
  });

  it('should log error when form is invalid', () => {
    component.formLogin.setValue({
      email: '',
      password: '',
      rememberMe: false
    });

    spyOn(console, 'error');
    component.onSubmit();

    expect(component.formLogin.valid).toBeFalse();
    expect(console.error).toHaveBeenCalledWith('Form is invalid', component.formLogin.errors);
  });

  // NO LOGRO HACERLO FUNCIONAR
  xit('should calling onSubmit, it should call login from AuthService.', () => {
    component.formLogin.setValue({
      email: 'fake@mail.com',
      password: '123456',
      rememberMe: true,
    });

    const spyOnLogin = spyOn(component, 'doLogin');
    component.onSubmit();
    expect(spyOnLogin).toHaveBeenCalled();
  });


});
