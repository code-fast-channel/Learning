import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-common-card-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './common-card-list.component.html',
  styleUrl: './common-card-list.component.scss'
})
export class CommonCardListComponent {
 @Input() list: any = [];
 @Output() listChange = new EventEmitter<any[]>();

 navigate(item: any): void {
  this.listChange.emit(item);
 }

}
