import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { dropdownConfig, learningList } from '../learning.constant';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CodeFormatterComponent } from '../code-formatter/code-formatter.component';
import { SingleSelectComponent } from '../../shared/components/single-select/single-select.component';
declare const ace: any;

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, FormsModule,CodeFormatterComponent,SingleSelectComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent implements OnInit {
  isMobile: boolean = false; // Flag to check if the device is mobile
  
  listData: any = learningList;
  dropdownConfig = dropdownConfig
  trackByIndex(index: number, item: any): number {
    return index;
  }

  constructor(private router: Router,private ref: ChangeDetectorRef) {
    this.isMobile = window.innerWidth <= 768; // Check if the width is less than or equal to 768px (common breakpoint for mobile)
    if (this.isMobile) {
      dropdownConfig.selectedValue = 1 as any;
    }
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




