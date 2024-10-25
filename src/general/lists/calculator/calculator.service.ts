// calculator.service.ts
import { Injectable } from '@angular/core';

@Injectable()
export class CalculatorService {

  constructor() { }

  // Evaluate the calculation expression
  evaluateExpression(expression: string): string {
    try {
      // Evaluate the expression safely
      const result: any = eval(expression);
      return result.toString();
    } catch (error) { 
      return 'Error';
    }
  }
}
