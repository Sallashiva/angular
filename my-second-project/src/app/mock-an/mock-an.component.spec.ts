import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MockAnComponent } from './mock-an.component';

describe('MockAnComponent', () => {
  let component: MockAnComponent;
  let fixture: ComponentFixture<MockAnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MockAnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MockAnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
