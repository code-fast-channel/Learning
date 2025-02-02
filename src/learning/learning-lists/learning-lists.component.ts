import { Component } from '@angular/core';
import { SingleSelectComponent } from '../../shared/components/single-select/single-select.component';
import { CommonCardListComponent } from '../../shared/components/common-card-list/common-card-list.component';
import { learningList } from '../learning.constant';
import { Router, RouterModule } from '@angular/router';
import { dropdownConfig } from '../../general/general-lists/general.constant';

@Component({
  selector: 'app-learning-lists',
  standalone: true,
  imports: [CommonCardListComponent, SingleSelectComponent, RouterModule],
  templateUrl: './learning-lists.component.html',
  styleUrl: './learning-lists.component.scss'
})
export class LearningListsComponent {
  list = structuredClone(learningList);
  config = structuredClone(dropdownConfig);
  constructor(private router: Router) {
 
  }
  navigate(item: any) {
   this.router.navigate(['learning/detail', item.selectedIndex])
  }
}
