import { Injectable } from '@angular/core';
import { FormulaFormat } from '../Types/FormulaFormat';

@Injectable({
  providedIn: 'root'
})
export class FormulasService {

  formulaArray: FormulaFormat[] = [];
  
  constructor() { }
  addFormula(obj: FormulaFormat){
    this.formulaArray.push(obj);
  }
}
