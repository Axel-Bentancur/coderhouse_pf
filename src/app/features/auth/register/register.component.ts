import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { firstNameValidator, lastNameValidator, phoneNumberValidator, emailValidator, addressValidator } from '../../../utils/validators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  formRegister: FormGroup

  constructor(
    private formBuilder: FormBuilder,
  ){
    this.formRegister = this.formBuilder.group({
      firstName: ["", firstNameValidator('first name')],
      lastName: ["", lastNameValidator('last name')],
      phone:["", phoneNumberValidator],
      address: ["", addressValidator],
      email:["", emailValidator],
      sex: ["", ]
    })
  }

  onSubmit(): void {
    if (this.formRegister.valid) {
      // Lógica para manejar el envío del formulario
      console.log('Formulario enviado:', this.formRegister.value);
    }
  }
}
