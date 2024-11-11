import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { firstNameValidator, lastNameValidator, emailValidator, roleValidator, passwordValidator } from '../../../../core/utils/validators';
import { MatDialogRef } from '@angular/material/dialog';
import { IUser } from '../../../../core/models';

@Component({
  selector: 'app-form-edit-user',
  templateUrl: './form-edit-user.component.html',
  styleUrl: './form-edit-user.component.scss'
})
export class FormEditUserComponent {
  formEdit: FormGroup

  @Input() user: IUser | null = null;
  @Input() action: string = '';
  @Input() modalType: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private matdialogRef: MatDialogRef<FormEditUserComponent>
  ){
    this.formEdit = this.formBuilder.group({
      firstName: ["", firstNameValidator('first name')],
      lastName: ["", lastNameValidator('last name')],
      email:["", emailValidator],
      password: ["", passwordValidator],
      role: ["", roleValidator]
    })
  }

  ngOnInit(): void {
    if (this.user) {
      this.formEdit.patchValue({
        firstName: this.user.firstName,
        lastName: this.user.lastName,
        email: this.user.email,
      });
    }
  }

  get firstNameControl(){
    return this.formEdit.get('firstName')
  }

  get lastNameControl(){
    return this.formEdit.get('lastName')
  }

  get emailControl(){
    return this.formEdit.get('email')
  }

  get passwordControl(){
    return this.formEdit.get('password')
  }

  get roleControl(){
    return this.formEdit.get('role')
  }

  onCancel(): void {
    this.matdialogRef.close();
  }

  onSubmit(): void {
    const userData = { ...this.formEdit.value };

    if (this.user && this.user.id) {
      userData.id = this.user.id;
    }

    if (this.formEdit.valid) {
      this.matdialogRef.close(userData);
    } else {
      console.error('Form is invalid', this.formEdit.errors);
    }
  }
}
