import { Component, ElementRef, Input, ViewChild } from '@angular/core';

declare const ace: any;
declare const prettier: any; // Declare the global prettier object
declare const prettierPlugins: any; // Declare the plugins object from the CDN

@Component({
  selector: 'app-code-formatter',
  standalone: true,
  imports: [],
  templateUrl: './code-formatter.component.html',
  styleUrls: ['./code-formatter.component.scss']
})
export class CodeFormatterComponent {
  @Input() code: string | any;

  @ViewChild('editor', { static: false }) editor!: ElementRef;

  ngAfterViewInit() {
    if (this.editor) {
      let formattedCode = this.code;

      // Attempt to format the code using Prettier
      try {
        formattedCode = prettier.format(this.code, {
          parser: 'babel',
          plugins: [prettierPlugins.babel],
          semi: true,
          singleQuote: true
        });
      } catch (error) {
        // console.warn('Prettier formatting failed:', error);
        // Proceed with the unformatted code if Prettier throws an error
      }

      // Initialize ACE editor with either formatted or original code
      const aceEditor = ace.edit(this.editor.nativeElement, {
        theme: 'ace/theme/monokai',
        mode: 'ace/mode/javascript',
        value: formattedCode, // Use the formatted or original code
        autoScrollEditorIntoView: true,
        minLines: 10,
        fontSize: 16
      });

      aceEditor.setOptions({
        enableBasicAutocompletion: false,
        enableLiveAutocompletion: false,
        enableSnippets: true,
        showPrintMargin: false,
        highlightActiveLine: true
      });

      aceEditor.session.setUseSoftTabs(true);
      aceEditor.session.setTabSize(4);
      aceEditor.session.setUseWorker(false);
    } else {
      // console.error('Editor element not found');
    }
  }
}