import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeRowComponent } from './change-row.component';

describe('ChangeRowComponent', () => {
  let component: ChangeRowComponent;
  let fixture: ComponentFixture<ChangeRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
