import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TimeMoneyCalculationComponent } from './time-money-calculation/time-money-calculation.component';

@Component({
  selector: 'app-time-calculator',
  standalone: true,
  imports: [RouterModule, FormsModule,CommonModule,TimeMoneyCalculationComponent],
  templateUrl: './time-calculator.component.html',
  styleUrl: './time-calculator.component.scss'
})
export class TimeCalculatorComponent {
  startDate: string = '';
  endDate: string = '';
  difference: any = {}; // Use an object to store all difference values




    calculateDifference() {
      if (this.startDate && this.endDate) {
        const start = new Date(this.startDate);
        const end = new Date(this.endDate);
    
        // Calculate total days
        const totalDays = Math.floor((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
        
        // Calculate year difference
        let years = end.getFullYear() - start.getFullYear();
    
        // Calculate month difference
        let months = end.getMonth() - start.getMonth();
        
        // Adjust year and month if necessary
        if (months < 0) {
          years--;
          months += 12;
        }
    
        // Calculate remaining days
        let days = end.getDate() - start.getDate();
        if (days < 0) {
          // Adjust the month if days are negative
          months--;
          // Get the last day of the previous month
          const previousMonth = new Date(end.getFullYear(), end.getMonth(), 0);
          days += previousMonth.getDate();
        }
    
        // Calculate remaining time in days, hours, minutes, seconds, milliseconds
        const diffInMs = Math.abs(end.getTime() - start.getTime());
        const detailedDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diffInMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diffInMs % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diffInMs % (1000 * 60)) / 1000);
        const milliseconds = diffInMs % 1000;
    
        // Store results in the difference object
        this.difference = {
          totalDays: totalDays,
          yearDifference: years,
          monthDifference: (years * 12) + months,
          detailed: `${detailedDays} Days, ${hours} Hours, ${minutes} Minutes, ${seconds} Seconds, ${milliseconds} Milliseconds`,
          detailedInYear: `${years} Years, ${months} Months, ${days} Days`
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



  
}
