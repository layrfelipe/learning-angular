import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnotherEmitterComponent } from './another-emitter.component';

describe('AnotherEmitterComponent', () => {
  let component: AnotherEmitterComponent;
  let fixture: ComponentFixture<AnotherEmitterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnotherEmitterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnotherEmitterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
