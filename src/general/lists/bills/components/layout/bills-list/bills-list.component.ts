
import { ChangeDetectorRef, Component } from '@angular/core';
import { CommonCardListComponent } from '../../../../../../shared/components/common-card-list/common-card-list.component';
import { billsList } from '../bills.constant';
import { ActivatedRoute, Router } from '@angular/router';
import { dropdownConfig } from '../../../../../general-lists/general.constant';
import { SingleSelectComponent } from '../../../../../../shared/components/single-select/single-select.component';

@Component({
  selector: 'app-bills-list',
  standalone: true,
  imports: [CommonCardListComponent, SingleSelectComponent],
  templateUrl: './bills-list.component.html',
  styleUrl: './bills-list.component.scss'
})
export class BillsListComponent {
  constructor(private router: Router, private ref: ChangeDetectorRef) {

  }
 list = billsList;
 config = dropdownConfig;
 listData(data: any): void {
  this.router.navigate([data.path]);
 }
}
