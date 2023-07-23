import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArmaniComponent } from './armani.component';

describe('ArmaniComponent', () => {
  let component: ArmaniComponent;
  let fixture: ComponentFixture<ArmaniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArmaniComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArmaniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
