import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAddCourseComponent } from './form-add-course.component';

describe('FormAddCourseComponent', () => {
  let component: FormAddCourseComponent;
  let fixture: ComponentFixture<FormAddCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormAddCourseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormAddCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
