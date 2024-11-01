import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { firstNameValidator, lastNameValidator, phoneNumberValidator, emailValidator, addressValidator, sexValidator } from '../../../core/utils/validators';

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
      sex: ["", sexValidator]
    })
  }

  get firstNameControl(){
    return this.formRegister.get('firstName')
  }

  get lastNameControl(){
    return this.formRegister.get('lastName')
  }

  get phoneControl(){
    return this.formRegister.get('phone')
  }

  get addressControl(){
    return this.formRegister.get('address')
  }

  get emailControl(){
    return this.formRegister.get('email')
  }

  get sexControl(){
    return this.formRegister.get('sex')
  }

  onSubmit(): void {
    if (this.formRegister.valid) {
      // Lógica para manejar el envío del formulario
      console.log('Form submitted:', this.formRegister.value);
    }
  }
}
