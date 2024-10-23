import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEditCourseComponent } from './form-edit-course.component';

describe('FormEditCourseComponent', () => {
  let component: FormEditCourseComponent;
  let fixture: ComponentFixture<FormEditCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormEditCourseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormEditCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
