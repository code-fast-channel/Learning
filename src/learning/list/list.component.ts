import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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
  styleUrl: './list.component.scss'
})
export class ListComponent implements OnInit, AfterViewInit {
  constructor(private router: Router) {

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
  getGridTemplateColumns(): any {
    return !['', null, undefined, 0, 'null'].includes(this.selectedValue) ? `repeat(${this.selectedValue}, 1fr)` : 'repeat(auto-fit, minmax(500px, 1fr))';
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
    },4000)
  }

  @ViewChild('editor', { static: false }) editor!: ElementRef;

  ngAfterViewInit() {
    if (this.editor) {
      const aceEditor = ace.edit(this.editor.nativeElement, {
        theme: 'ace/theme/monokai',  // Choose a color-coded theme
        mode: 'ace/mode/javascript', // Enable syntax highlighting for JavaScript
        value: `// Program to reverse a string
function reverseString(str) {
  return str.split('').reverse().join('');
}

console.log(reverseString('Hello, World!')); // Output: !dlroW ,olleH`,
        autoScrollEditorIntoView: true,
        maxLines: 30,  // Adjust the editor's height
        minLines: 10,
        fontSize: 16  // Set font size
      });

      // Enable additional settings (no diff or split editor)
      aceEditor.setOptions({
        enableBasicAutocompletion: false,  // Enable autocompletion
        enableLiveAutocompletion: false,   // Enable live autocompletion
        enableSnippets: true,             // Enable code snippets
        showPrintMargin: false,           // Disable print margin (if it was visible)
        highlightActiveLine: true         // Highlight active line
      });

      // Ensure no diff or split mode is active
      aceEditor.session.setUseWorker(false);  // Disable workers for highlighting
    } else {
      console.error('Editor element not found');
    }
  }


}




