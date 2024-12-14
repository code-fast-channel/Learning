
import { ChangeDetectorRef, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { SingleSelectComponent } from '../../shared/components/single-select/single-select.component';
import { dropdownConfig, lists } from './general.constant';
import { CommonCardListComponent } from '../../shared/components/common-card-list/common-card-list.component';

@Component({
  selector: 'app-general-lists',
  standalone: true,
  imports: [FormsModule, RouterModule, SingleSelectComponent,CommonCardListComponent],
  templateUrl: './general-lists.component.html',
  styleUrl: './general-lists.component.scss'
})
export class GeneralListsComponent {
  constructor(private router: Router,private ref: ChangeDetectorRef) {

  }
  
  listData: any = lists;
  config = structuredClone(dropdownConfig);
  
  trackByIndex(index: number, item: any): number {
    return index;
  }

  ngOnInit() {}


  listDataChange(data: any): void {
    this.router.navigate([data.path]);
   }


}
