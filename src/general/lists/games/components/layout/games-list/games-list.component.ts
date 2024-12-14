
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { gamesList } from '../games-list.constant';
import { CommonCardListComponent } from '../../../../../../shared/components/common-card-list/common-card-list.component';
import { SingleSelectComponent } from '../../../../../../shared/components/single-select/single-select.component';
import { dropdownConfig } from '../../../../../general-lists/general.constant';

@Component({
  selector: 'app-games-list',
  standalone: true,
  imports: [CommonCardListComponent, SingleSelectComponent],
  templateUrl: './games-list.component.html',
  styleUrl: './games-list.component.scss'
})
export class GamesListComponent {
 list = gamesList;
 config = dropdownConfig;

 constructor(private router: Router) {

 }

 navigate(val: any) {
  this.router.navigate([val.path])
}


}
