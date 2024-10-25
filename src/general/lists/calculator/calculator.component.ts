import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { CalculatorService } from './calculator.service';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [CommonModule, FormsModule,RouterModule],
  providers: [CalculatorService],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.scss'
})
export class CalculatorComponent {
  displayValue: string = '';  // Value on the calculator display
  history: { expression: string, result: string }[] = []; // Calculation history

  constructor(private calculatorService: CalculatorService) {}

  // Append input to display
  appendInput(value: string) {
    if (this.displayValue === '0' && value !== '.') {
      this.displayValue = value;
    } else {
      this.displayValue += value;
    }
  }

  // Clear the display
  clearDisplay() {
    this.displayValue = '';
  }

  // Delete the last input character
  deleteLast() {
    this.displayValue = this.displayValue.slice(0, -1) || '0';
  }

  // Perform the calculation
  calculate() {
    try {
      const result = this.calculatorService.evaluateExpression(this.displayValue);

      // Add to history
      this.history.unshift({
        expression: this.displayValue,
        result: result
      });

      this.displayValue = result;
    } catch (error) {
      this.displayValue = 'Error';
    }
  }

  // Clear history
  clearHistory() {
    this.history = [];
  }

  // Handle keyboard input
  @HostListener('window:keydown', ['$event'])
  handleKeyPress(event: KeyboardEvent) {
    const key = event.key;

    if (!isNaN(Number(key))) {
      // If the key is a number
      this.appendInput(key);
    } else if (key === '+' || key === '-' || key === '*' || key === '/') {
      // If the key is an operator
      this.appendInput(key);
    } else if (key === 'Enter') {
      // If Enter is pressed, calculate
      event.preventDefault();
      this.calculate();
    } else if (key === 'Backspace') {
      // If Backspace is pressed, delete the last character
      this.deleteLast();
    } else if (key === 'Escape') {
      // If Escape is pressed, clear the display
      this.clearDisplay();
    }
  }
}
