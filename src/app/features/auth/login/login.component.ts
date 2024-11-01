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
      next: (result) => {
        this.router.navigate(['dashboard', 'students'])
        console.log(result)
      },
      error: (err) => {
        console.error(err);
        if (err instanceof Error) {
            alert(err.message);
        }
        if (err instanceof HttpErrorResponse) {
            if (err.status === 0) {
                alert('Could not connect to the server');
            }
        }
      },
    })
  }

  onSubmit(): void {
    if (this.formLogin.valid) {
      this.doLogin();
    } else {
      this.formLogin.markAllAsTouched();
      console.error('Form is invalid', this.formLogin.errors);
    }
  }
}
