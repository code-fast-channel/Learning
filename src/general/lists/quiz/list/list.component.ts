import { Component } from '@angular/core';
import { quizList } from '../quiz.constant';
import { Router } from '@angular/router';


@Component({
  selector: 'app-list',
  standalone: true,
  imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  list = structuredClone(quizList);
  constructor(private router: Router) {
 
  }
  navigate(id: any) {
   this.router.navigate(['general/quiz/quiz-play', id]);
  }
}
