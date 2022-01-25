import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MchildComponent } from './mchild.component';

describe('MchildComponent', () => {
  let component: MchildComponent;
  let fixture: ComponentFixture<MchildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MchildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
