import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEditComponent } from './form-edit.component';

describe('FormEditComponent', () => {
  let component: FormEditComponent;
  let fixture: ComponentFixture<FormEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
