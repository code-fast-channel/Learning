import { Component, OnInit } from '@angular/core';
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
  styleUrl: './detail.component.scss'
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

  checkGroupExist = (val: any) => val.some((ele: any) => ele?.code); 
  constructor(private activateRoute: ActivatedRoute,private router: Router) {

  }
  ngOnInit() {
    this.activateRoute.params.subscribe((params: any) => {
      const data: any = learningList[+params.id].filesList;
      let arr: any = [];
      data.forEach((element: any) => {
        console.log('ele', element);
        let obj = {filesList: [element],title: element.title, isGroup: element.isGroup}
        arr.push(obj);

      });
      this.listData = arr;
      this.selectedListData = learningList[+params.id];
      console.log('data',this.selectedListData,learningList);
    });
    this.activateRoute.data.subscribe(Val=> {
      console.log(Val)
    })
  }


  navigateToDetail(id: any) {
    this.router.navigate(['learning/detail', id])
  }

  copy(text: any,i: any,parentIndex: any,childIndex: any) {
    this.listData[i].filesList[parentIndex].codeLists[childIndex].isCopied = true;
    navigator.clipboard.writeText(text);
    setTimeout(() => {
      this.listData[i].filesList[parentIndex].codeLists[childIndex].isCopied = false;
    },4000)
  }

}


