import { Component, OnInit } from '@angular/core';
import { FormulaFormat } from '../Types/FormulaFormat';
import { FormulasService } from '../Services/formulas.service';

@Component({
  selector: 'app-formula-cart',
  templateUrl: './formula-cart.component.html',
  styleUrls: ['./formula-cart.component.css']
})
export class FormulaCartComponent implements OnInit {

  constructor(private formulaServie: FormulasService) { }
  formulas: FormulaFormat[] = this.formulaServie.formulaArray;
  ngOnInit(): void {
  }

}
