import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginseconComponent } from './loginsecon.component';

describe('LoginseconComponent', () => {
  let component: LoginseconComponent;
  let fixture: ComponentFixture<LoginseconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginseconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginseconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
