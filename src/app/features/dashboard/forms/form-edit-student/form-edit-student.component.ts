import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { firstNameValidator, lastNameValidator, phoneNumberValidator, emailValidator, addressValidator } from '../../../../core/utils/validators';
import { MatDialogRef } from '@angular/material/dialog';
import { IStudent } from '../../../../core/models';

@Component({
  selector: 'app-form-edit-student',
  templateUrl: './form-edit-student.component.html',
  styleUrl: './form-edit-student.component.scss'
})
export class FormEditStudentComponent {
  formEdit: FormGroup
  @Input() student: IStudent | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private matdialogRef: MatDialogRef<FormEditStudentComponent>
  ){
    this.formEdit = this.formBuilder.group({
      firstName: ["", firstNameValidator('first name')],
      lastName: ["", lastNameValidator('last name')],
      phone:["", phoneNumberValidator],
      address: ["", addressValidator],
      email:["", emailValidator],
    })
  }

  ngOnInit(): void {
    if (this.student) {
      this.formEdit.patchValue({
        firstName: this.student.firstName,
        lastName: this.student.lastName,
        phone: this.student.phone,
        address: this.student.address,
        email: this.student.email,
      });
    }
  }

  get firstNameControl(){
    return this.formEdit.get('firstName')
  }

  get lastNameControl(){
    return this.formEdit.get('lastName')
  }

  get phoneControl(){
    return this.formEdit.get('phone')
  }

  get addressControl(){
    return this.formEdit.get('address')
  }

  get emailControl(){
    return this.formEdit.get('email')
  }

  onSubmit(): void {
    const studentData = {
      ...this.formEdit.value,
      id: this.student ? this.student.id : null
    };

    if (this.formEdit.valid) {
      this.matdialogRef.close(studentData);
    } else {
      console.error('Form is invalid', this.formEdit.errors);
    }
  }
}
