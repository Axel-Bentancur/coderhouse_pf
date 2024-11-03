import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';
import { emailValidator, passwordValidator } from '../../../core/utils/validators';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  formLogin: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
  ){
    this.formLogin = this.formBuilder.group({
      email:["", emailValidator],
      password: ["", passwordValidator],
      rememberMe: [true]
    })
  }

  get emailControl(){
    return this.formLogin.get('email')
  }

  get passwordControl(){
    return this.formLogin.get('password')
  }

  doLogin(){
    this.authService.login(this.formLogin.value).subscribe({
      next: () => {
        this.router.navigate(['dashboard', 'students'])
      },
      error: (err) => {
        if (err instanceof Error) {
          console.error(`An unexpected error occurred: ${err.message}`);
        } else if (err instanceof HttpErrorResponse) {
          if (err.status === 0) {
            console.error('Could not connect to the server. Please check your network connection.');
          } else if (err.status >= 400 && err.status < 500) {
            console.error(`Client error: ${err.error?.message || 'Invalid request. Please try again.'}`);
          } else if (err.status >= 500) {
            console.error('Server error: Please try again later.');
          } else {
            console.error(`Unexpected error: ${err.statusText}`);
          }
        } else {
          console.error('An unknown error occurred. Please try again later.');
        }
      },
    })
  }

  onSubmit(): void {
    if (this.formLogin.valid) {
      this.doLogin();
    } else {
      this.formLogin.markAllAsTouched();
      console.error('Form is invalid');
    }
  }
}
