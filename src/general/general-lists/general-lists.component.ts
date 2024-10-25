import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-general-lists',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterModule],
  templateUrl: './general-lists.component.html',
  styleUrl: './general-lists.component.scss'
})
export class GeneralListsComponent {
  constructor(private router: Router,private ref: ChangeDetectorRef) {

  }
  
  listData: any = [
    {
      path: '/learning',
      title: 'Learning',
      description: `1) Here we can learn list of all topics.
      2) Ex: Array,Object, Array of Objects, Angular
      `
    },
    {
      path: '/general/calculator',
      title: 'Calculator',
      description: `1) Here we can use simple calculator.
      2) Simple calculator
      `
    },
    {
      path: '/general/time-calculator',
      title: 'Date Time calculator',
      description: `1) Basic time and date calculator.
      2) Ex: Difference between two times and date
      `
    },
    // {
    //   path: '',
    //   title: '',
    //   description: `1) Here we can learn list of all topics.
    //   2) Ex: Array,Object, Array of Objects, Angular
    //   `
    // }
  ];
  selectedValue = '3';
  framPerList = [
    {
      name: 'Auto Adjust',
      value: null

    },
    {
      name: '1frame',
      value:'1'

    },
    {
      name: '2frame',
      value:'2'
      
    },
    {
      name: '3frame',
      value:'3'
    }
  ];
  trackByIndex(index: number, item: any): number {
    return index;
  }

  ngOnInit() {}

  navigateToDetail(val: any) {
    this.router.navigate([val.path])
  }


}
