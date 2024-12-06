import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { gamesList } from '../games-list.constant';

@Component({
  selector: 'app-games-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './games-list.component.html',
  styleUrl: './games-list.component.scss'
})
export class GamesListComponent {
 list = gamesList;

 constructor(private router: Router) {

 }

 navigate(val: any) {
  this.router.navigate([val])
}


}
