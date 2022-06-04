import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggedInGuardComponent } from './logged-in-guard.component';

describe('LoggedInGuardComponent', () => {
  let component: LoggedInGuardComponent;
  let fixture: ComponentFixture<LoggedInGuardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoggedInGuardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoggedInGuardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
