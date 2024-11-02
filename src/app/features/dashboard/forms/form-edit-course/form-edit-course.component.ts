import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { courseNameValidator, numberValidator, teacherNameValidator } from '../../../../core/utils/validators';
import { MatDialogRef } from '@angular/material/dialog';
import { ICourse } from '../../../../core/models';

@Component({
  selector: 'app-form-edit-course',
  templateUrl: './form-edit-course.component.html',
  styleUrl: './form-edit-course.component.scss'
})
export class FormEditCourseComponent {
  formEdit: FormGroup
  @Input() course: ICourse | null = null;
  @Input() action: string = '';
  @Input() modalType: string = '';


  constructor(
    private formBuilder: FormBuilder,
    private matdialogRef: MatDialogRef<FormEditCourseComponent>
  ){
    this.formEdit = this.formBuilder.group({
      courseName: ["", courseNameValidator('course name')],
      courseClassQty: ["", numberValidator('number of classes')],
      hoursQty:["", numberValidator('hours')],
      teacherName: ["", teacherNameValidator('teacher name')],
    })
  }

  ngOnInit(): void {
    if (this.course) {
      this.formEdit.patchValue({
        courseName: this.course.courseName,
        courseClassQty: this.course.courseClassQty,
        hoursQty: this.course.hoursQty,
        teacherName: this.course.teacherName,
      });
    }
  }

  get courseNameControl(){
    return this.formEdit.get('courseName')
  }

  get courseClassQtyControl(){
    return this.formEdit.get('courseClassQty')
  }

  get hoursQtyControl(){
    return this.formEdit.get('hoursQty')
  }

  get teacherNameControl(){
    return this.formEdit.get('teacherName')
  }

  onCancel(): void {
    this.matdialogRef.close();
  }

  onSubmit(): void {
    const courseData = { ...this.formEdit.value };

    if (this.course && this.course.id) {
      courseData.id = this.course.id;
    }

    if (this.formEdit.valid) {
      this.matdialogRef.close(courseData);
    } else {
      console.error('Form is invalid', this.formEdit.errors);
    }
  }
}
