
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-common-card-list',
  standalone: true,
  imports: [],
  templateUrl: './common-card-list.component.html',
  styleUrl: './common-card-list.component.scss'
})
export class CommonCardListComponent {
 @Input() list: any = [];
 @Input() gridCount?:any = null;
 @Output() listChange = new EventEmitter<any[]>();

 navigate(item: any,index: number): void {
  this.listChange.emit({...item, selectedIndex: index});
 }

}
