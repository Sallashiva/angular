import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntractComponent } from './intract.component';

describe('IntractComponent', () => {
  let component: IntractComponent;
  let fixture: ComponentFixture<IntractComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntractComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
