import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-time-calculator',
  standalone: true,
  imports: [RouterModule, FormsModule,CommonModule],
  templateUrl: './time-calculator.component.html',
  styleUrl: './time-calculator.component.scss'
})
export class TimeCalculatorComponent {
  startDate: string = '';
  endDate: string = '';
  difference: any = {}; // Use an object to store all difference values


  // date time cost calculator.
  start: string = '';
  end: string = '';
  costPerHour: number = 0;
  
  // Output variables for the difference
  differences: any = {
      differences: '',
      month: '',
      time: '',
      hours: '',
      minutes: '',
      cost: ''
    };

  calculateDifference() {
    if (this.startDate && this.endDate) {
      const start = new Date(this.startDate);
      const end = new Date(this.endDate);
      
      // Calculate total days
      const totalDays = Math.floor((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
      
      // Calculate year difference
      const yearDifference = end.getFullYear() - start.getFullYear();
      
      // Calculate month difference
      const monthDifference = (yearDifference * 12) + (end.getMonth() - start.getMonth());

      // Calculate remaining time
      const diffInMs = Math.abs(end.getTime() - start.getTime());
      const days = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diffInMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diffInMs % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diffInMs % (1000 * 60)) / 1000);
      const milliseconds = diffInMs % 1000;

      // Store results in the difference object
      this.difference = {
        totalDays: totalDays,
        yearDifference: yearDifference,
        monthDifference: monthDifference,
        detailed: `${days} Days, ${hours} Hours, ${minutes} Minutes, ${seconds} Seconds, ${milliseconds} Milliseconds`
      };
    } else {
      this.difference = { detailed: 'Please select both dates.' };
    }
  }

  clear() {
    this.startDate = '';
    this.endDate = '';
    this.difference = {};
  }



  // date time cost

  // Method to calculate the date difference
  // Method to calculate the date difference with cost
calculateDifferences() {
  if (this.isInputValid()) {
    const { totalDays, totalHours, totalMinutes, totalCost } = this.calculateTimeAndCost();
    this.updateDifferenceObject(totalDays, totalHours, totalMinutes, totalCost);
  } else {
    this.resetDifference();
  }
}

// Validate the input fields
isInputValid(): boolean | any {
  return this.start && this.end && this.costPerHour > 0;
}

// Calculate the total time and cost
calculateTimeAndCost() {
  const start = new Date(this.start);
  const end = new Date(this.end);
  
  // Calculate total time in milliseconds
  const diffInMs = Math.abs(end.getTime() - start.getTime());
  
  // Calculate total days, hours, and minutes
  const totalDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
  const totalHours = Math.floor((diffInMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const totalMinutes = Math.floor((diffInMs % (1000 * 60 * 60)) / (1000 * 60));
  
  // Calculate total cost
  const totalCost = (totalDays * 24 + totalHours) * this.costPerHour;

  return { totalDays, totalHours, totalMinutes, totalCost };
}

// Update the difference object with calculated values
updateDifferenceObject(totalDays: number, totalHours: number, totalMinutes: number, totalCost: number) {
  this.differences = {
    differences: `${totalDays} days, ${totalHours} hours, ${totalMinutes} minutes`,
    month: Math.floor(totalDays / 30), // Approximate month calculation
    time: `${totalHours} hours, ${totalMinutes} minutes`,
    hours: totalHours,
    minutes: totalMinutes,
    cost: totalCost.toFixed(2) // Format to 2 decimal places
  };
}

// Reset the difference object if inputs are invalid
resetDifference() {
  this.differences = {
    differences: '',
    month: '',
    time: '',
    hours: '',
    minutes: '',
    cost: ''
  };
}

// Clear all inputs and reset the difference
clearAll() {
  this.start = '';
  this.end = '';
  this.costPerHour = 0;
  this.resetDifference();
}
}
