
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-time-money-calculation',
  standalone: true,
  imports: [RouterModule, FormsModule],
  templateUrl: './time-money-calculation.component.html',
  styleUrls: ['./time-money-calculation.component.scss']
})
export class TimeMoneyCalculationComponent {
  start: string = '';
  end: string = '';
  costPerHour: number = 0;

  differences: any = {
    differences: '',
    month: '',
    time: '',
    hours: '',
    minutes: '',
    cost: ''
  };

  // Main calculation method
  calculateDifferences() {
    if (this.isInputValid()) {
      const { totalDays, totalHours, totalMinutes, totalCost } = this.calculateTimeAndCost();
      this.updateDifferenceObject(totalDays, totalHours, totalMinutes, totalCost);
    } else {
      this.resetDifference();
    }
  }

  // Validate the input fields
  isInputValid(): boolean {
    return Boolean(this.start && this.end && this.costPerHour > 0);
  }

  // Calculate the total time and cost
  calculateTimeAndCost() {
    const start = new Date(this.start);
    const end = new Date(this.end);

    // Total time in milliseconds
    const diffInMs = Math.abs(end.getTime() - start.getTime());

    // Calculate days, hours, and minutes
    const totalDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
    const remainingHoursInMs = diffInMs % (1000 * 60 * 60 * 24);
    const totalHours = Math.floor(remainingHoursInMs / (1000 * 60 * 60));
    const remainingMinutesInMs = remainingHoursInMs % (1000 * 60 * 60);
    const totalMinutes = Math.floor(remainingMinutesInMs / (1000 * 60));

    // Total cost calculation
    const totalHoursForCost = (totalDays * 24) + totalHours + (totalMinutes / 60);
    const totalCost = totalHoursForCost * this.costPerHour;

    return { totalDays, totalHours, totalMinutes, totalCost };
  }

  // Update the difference object
  updateDifferenceObject(totalDays: number, totalHours: number, totalMinutes: number, totalCost: number) {
    this.differences = {
      differences: `${totalDays} days, ${totalHours} hours, ${totalMinutes} minutes`,
      month: Math.floor(totalDays / 30), // Approximate month calculation
      time: `${totalHours} hours, ${totalMinutes} minutes`,
      hours: totalHours,
      minutes: totalMinutes,
      cost: totalCost.toFixed(2) // Format cost to 2 decimal places
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
