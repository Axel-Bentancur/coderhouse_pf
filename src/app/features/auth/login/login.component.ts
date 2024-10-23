import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  formLogin: FormGroup

  constructor(
    private formBuilder: FormBuilder,
  ){
    this.formLogin = this.formBuilder.group({
      email:["", ],//emailValidator],
      password: ["", ],// passwordValidator]
      rememberMe: [true]
    })
  }

  onSubmit(): void {
    if (this.formLogin.valid) {
      // Lógica para manejar el envío del formulario
      console.log('Formulario enviado:', this.formLogin.value);
    }
  }
}
