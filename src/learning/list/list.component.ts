import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { learningList } from '../learning.constant';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CodeFormatterComponent } from '../code-formatter/code-formatter.component';
declare const ace: any;

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, FormsModule,CodeFormatterComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent implements OnInit {
  constructor(private router: Router,private ref: ChangeDetectorRef) {

  }
  
  listData: any = learningList;
  selectedValue = '1';
  framPerList = [
    {
      name: 'Auto Adjust',
      value: null

    },
    {
      name: '1frame',
      value:'1'

    },
    {
      name: '2frame',
      value:'2'
      
    },
    {
      name: '3frame',
      value:'3'
    }
  ];
  trackByIndex(index: number, item: any): number {
    return index;
  }

  ngOnInit() {}

  navigateToDetail(id: any) {
    this.router.navigate(['learning/detail', id])
  }

  copy(text: any,i: any,parentIndex: any,childIndex: any) {
    this.listData[i].filesList[parentIndex].codeLists[childIndex].isCopied = true;
    navigator.clipboard.writeText(text);
    setTimeout(() => {
      this.listData[i].filesList[parentIndex].codeLists[childIndex].isCopied = false;
      this.ref.markForCheck();
    },4000);
  }


}




