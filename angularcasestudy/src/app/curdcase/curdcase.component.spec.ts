import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurdcaseComponent } from './curdcase.component';

describe('CurdcaseComponent', () => {
  let component: CurdcaseComponent;
  let fixture: ComponentFixture<CurdcaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurdcaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurdcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
