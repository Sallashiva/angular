import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomgmailComponent } from './customgmail.component';

describe('CustomgmailComponent', () => {
  let component: CustomgmailComponent;
  let fixture: ComponentFixture<CustomgmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomgmailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomgmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
