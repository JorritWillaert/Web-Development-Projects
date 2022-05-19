import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoFormWithValidationsShorthandComponent } from './demo-form-with-validations-shorthand.component';

describe('DemoFormWithValidationsShorthandComponent', () => {
  let component: DemoFormWithValidationsShorthandComponent;
  let fixture: ComponentFixture<DemoFormWithValidationsShorthandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoFormWithValidationsShorthandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoFormWithValidationsShorthandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
