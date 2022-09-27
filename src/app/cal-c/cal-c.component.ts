import { Component, OnInit } from '@angular/core';
import { expression } from 'mathjs';
import { FormulasService } from '../Services/formulas.service';
import { NotificatonService } from '../Services/notificaton.service';
import { ParsingService } from '../Services/parsing.service';
import { FormulaFormat } from '../Types/FormulaFormat';
@Component({
  selector: 'app-cal-c',
  templateUrl: './cal-c.component.html',
  styleUrls: ['./cal-c.component.css']
})
export class CalCComponent implements OnInit {

  constructor(
    private parse: ParsingService,
    private formulaSerive: FormulasService,
    private notifyService: NotificatonService,
    ) { }

  ngOnInit(): void {
  }

  input: string = "";
  formulaName: string = "";
  isParsingDone:boolean = false;
  parameterList: string[] = [
    'Time',
    'Speed',
    'ProductCount',
    'CountIn',
    'CountOut',
    'DefectiveProducts',
  ];
  trignometry: string[] = [
    'sin',
    'cos',
    'tan',
  ];
  // Previous Character CHecking Function 
  PreviousChar(){
    this.isParsingDone = false;
    var prevChar = this.input[this.input.length-1];
    return prevChar;
  }

  // Clear Input Function
  ClearAC(){
    this.input = "";
  }

  // Function For NUmbers
  Numbers(num: string){
    if(this.input.length == 0){
      this.input = this.input + num;
      return ;
    }
    const regex = new RegExp(/[A-Za-z\)\]]/);
    if(!regex.test(this.PreviousChar())){
      this.input = this.input + num;
    }
    else{
      this.notifyService.showWarning("Missing Operator (+,-,*,/,%)");
    }
  }

  // Function For Operators
  Operators(op: string){
    if(this.input.length == 0){
      this.notifyService.showWarning("Add variables and functions to perform operation");
      return;
    }
    const regex = new RegExp(/[,\+\-\*\/%]/);
    if(!regex.test(this.PreviousChar())){
      this.input = this.input + op;
    }
    else{
      this.input = this.input.slice(0,this.input.length-1);
      this.input = this.input + op;
    }
  }

  // Variables Handling
  variablesHandling(variable: string){
    if(this.input.length === 0){
      this.input = this.input + variable;
      return;
    }
    const regex = new RegExp(/[A-Za-z0-9\]\)]/);
    if(!regex.test(this.PreviousChar())){
      this.input = this.input + variable;
    }
    else{
      this.notifyService.showWarning("Missing arithmetic operator or parenthesis!");
    }
  }

  // Parenthesis Handling
  Symbols(sym: string){
    if(sym === '(' || sym === '['){
      if(this.input.length === 0){
        this.input = this.input + sym;
        return;
      }
      const regex = new RegExp(/[A-Za-z0-9\)\]]/);
      if(regex.test(this.PreviousChar())){
        this.notifyService.showWarning("Missing arithmetic operator");
        return;
      }
    }
    this.input = this.input + sym;
  }

  //Trignometric Fucntions
  Trignometry(trigo: string){
    if(this.input.length === 0){
      this.input = this.input + trigo;
      return;
    }
    const regex = new RegExp(/[A-Za-z0-9\)\]]/);
    if(!regex.test(this.PreviousChar())){
      this.input = this.input + trigo;
    }
    else{
      this.notifyService.showWarning("Missing arithmetic operator!");
    }
  }

  //Special Functions
  specialFunctions(func: string){
    if(this.input.length === 0){
      this.input = this.input + func;
      return;
    }
    const regex = new RegExp(/[A-Za-z0-9\)\]]/);
    if(!regex.test(this.PreviousChar())){
      this.input = this.input + func;
    }
    else{
      this.notifyService.showWarning("Missing arithmetic operator!");
    }
  }

  // Single variable checking
  singleVariableChecking(){
    const regex = new RegExp(/[A-Za-z\(\)\[\]]/);

    for(let i=0; i < this.input.length; i++){
      if(!regex.test(this.input[i])){
        return true;
      }
    }
    return false;
  }
  // Parsing the input string
  parseFunction(){
    
    if(this.formulaName.length === 0){
      this.notifyService.showWarning("Formula Name can't be empty!");
      return;
    }

    if(this.input.length != 0 && this.parse.isValid(this.input) && this.singleVariableChecking()){
      this.isParsingDone = true;
      this.notifyService.showSuccess("Formula is Correct");
    }
    else{
      this.isParsingDone = false;
      this.input = "";
      this.notifyService.showError("Formula is Wrong");
    }

  }

  // On Save
  saveFormula(){
    let obj:FormulaFormat = {
      name: this.formulaName,
      expression: this.input,
    }
    this.formulaSerive.addFormula(obj);
  }

  saveFromulaError(){
    this.notifyService.showWarning("Parse the formula and then click on save button!");
  }
}
