import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaCartComponent } from './formula-cart.component';

describe('FormulaCartComponent', () => {
  let component: FormulaCartComponent;
  let fixture: ComponentFixture<FormulaCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulaCartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormulaCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
