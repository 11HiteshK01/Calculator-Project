import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalCComponent } from './cal-c.component';

describe('CalCComponent', () => {
  let component: CalCComponent;
  let fixture: ComponentFixture<CalCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalCComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
