import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { learningList } from '../learning.constant';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CodeFormatterComponent } from '../code-formatter/code-formatter.component';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [CommonModule, FormsModule, CodeFormatterComponent],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailComponent implements OnInit {
  
  selectedListData: any = {};
  selectedValue = '1';
  listData: any = [];
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
  constructor(private activateRoute: ActivatedRoute,private router: Router, private ref: ChangeDetectorRef) {

  }
  ngOnInit() {
    this.activateRoute.params.subscribe((params: any) => {
      const data: any = learningList[+params.id].filesList;
      let arr: any = [];
      data.forEach((element: any) => {
        let obj = {filesList: [element],title: element.title, isGroup: element.isGroup}
        arr.push(obj);

      });
      this.listData = arr;
      this.selectedListData = learningList[+params.id];
      this.ref.markForCheck();
    });
  }


  navigateToDetail(id: any) {
    this.router.navigate(['learning/detail', id])
  }

  navigatetoList() {
    this.router.navigate(['learning/list'])
  }

  copy(text: any,i: any,parentIndex: any,childIndex: any) {
    this.listData[i].filesList[parentIndex].codeLists[childIndex].isCopied = true;
    navigator.clipboard.writeText(text);
    setTimeout(() => {
      this.listData[i].filesList[parentIndex].codeLists[childIndex].isCopied = false;
      this.ref.markForCheck();
    },4000)
  }

}


