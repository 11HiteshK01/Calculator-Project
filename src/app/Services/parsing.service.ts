import { Injectable } from '@angular/core';

declare var require: any;
var mathjs = require('mathjs');

@Injectable({
  providedIn: 'root'
})
export class ParsingService {

  constructor() { }
  // parse the input string
  isValid(input: string){
    try{
      mathjs.parse(input);
    }
    catch(err: any){
      return false;
    }
    return true;
  } 

}
