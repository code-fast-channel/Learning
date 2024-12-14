import { Component } from '@angular/core';
import { quizList } from '../quiz.constant';
import { Router } from '@angular/router';
import { SingleSelectComponent } from '../../../../shared/components/single-select/single-select.component';
import { CommonCardListComponent } from '../../../../shared/components/common-card-list/common-card-list.component';
import { dropdownConfig } from '../../../general-lists/general.constant';


@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonCardListComponent, SingleSelectComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  list = structuredClone(quizList);
  config = structuredClone(dropdownConfig);
  constructor(private router: Router) {
 
  }
  navigate(item: any) {
   this.router.navigate(['general/quiz/quiz-play', item.id]);
  }
}
