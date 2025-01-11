import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { quizList } from '../quiz.constant';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-quize-test',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './quize-test.component.html',
  styleUrl: './quize-test.component.scss'
})
export class QuizeTestComponent {
  selectedList: any = {};
  list: any = [];
  submitted: boolean = false;
  correctAnswerCount = 0;
  selectedId = null;
  constructor(private router: Router, private activateRoute: ActivatedRoute) {
   this.activateRoute.params.subscribe((param: any) => {
    this.selectedId = param.id;
    this.assignData();
   })
  }

  assignData(): void {
    const ind = quizList.findIndex(val => val.id == this.selectedId);
    this.selectedList = quizList[ind];
    this.list = structuredClone(quizList[ind].data);
    console.log('val',ind);
  }
 
  navigate(): void {
   this.router.navigate(['/quiz']);
  }

  submit(): void {
    this.submitted = true;
    this.correctAnswerCount = this.list.reduce((total: any, question: any) => {
      return total + (question.selectedAnswer === question.selectedOption ? 1 : 0);
    }, 0);
  }

    reset(): void {
      this.submitted = false;
      this.correctAnswerCount = 0;
      this.assignData();
    }
}
