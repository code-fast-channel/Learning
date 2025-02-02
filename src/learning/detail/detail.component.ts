import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { dropdownConfig, learningList } from '../learning.constant';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CodeFormatterComponent } from '../code-formatter/code-formatter.component';
import { SingleSelectComponent } from '../../shared/components/single-select/single-select.component';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [CommonModule, FormsModule, CodeFormatterComponent, SingleSelectComponent],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailComponent implements OnInit {
  
  selectedListData: any = {};
  dropdownConfig = dropdownConfig;
  listData: any = [];
  isMobile: boolean = false;

  trackByIndex(index: number, item: any): number {
    return index;
  }
  constructor(private activateRoute: ActivatedRoute,private router: Router, private ref: ChangeDetectorRef) {
    this.isMobile = window.innerWidth <= 768; // Check if the width is less than or equal to 768px (common breakpoint for mobile)
    if (this.isMobile) {
      dropdownConfig.selectedValue = 1 as any;
    }
  }
  ngOnInit() {
    this.activateRoute.params.subscribe((params: any) => {
      const id = +params.id;
      // const selectedId = learningList.findIndex(val => val.id == id);
      const data: any = learningList[id].filesList;
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
    this.router.navigate(['learning/'])
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


