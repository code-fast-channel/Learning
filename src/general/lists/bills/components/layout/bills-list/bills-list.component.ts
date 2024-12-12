
import { Component } from '@angular/core';
import { CommonCardListComponent } from '../../../../../../shared/components/common-card-list/common-card-list.component';
import { billsList } from '../bills.constant';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-bills-list',
  standalone: true,
  imports: [CommonCardListComponent],
  templateUrl: './bills-list.component.html',
  styleUrl: './bills-list.component.scss'
})
export class BillsListComponent {
  constructor(private router: Router) {

  }
 list = billsList;

 listData(data: any): void {
  this.router.navigate([data.path]);
 }
}
