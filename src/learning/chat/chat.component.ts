import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { learningList } from '../learning.constant';
// import { learningList } from './learning.constant';

@Component({
  selector: 'app-chat',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  standalone: true,
  template: `
      <!-- <ng-select [items]="sizesList"
               bindLabel="title"
               bindValue="id"
               [(ngModel)]="selectedSizes"
               [multiple]="true"
               [closeOnSelect]="false"
               [searchable]="true"
               [searchFn]="customSearchFn"
               placeholder="Select sizes">
      <ng-template ng-option-tmp let-item="item">
        <div class="custom-checkbox">
          <input type="checkbox" [checked]="selectedSizes.includes(item.id)" (change)="toggleSizeSelection(item.id)" />
          {{ item.title }} - <br> {{ item.description }}
          <div *ngFor="let file of item.filesList" class="nested-checkbox">
            <input type="checkbox" [checked]="isFileSelected(item.id, file.name)" (change)="toggleFileSelection(item.id, file.name)" />
            {{ file.name }} - {{ file.title }} - {{ file.description }}
            <div *ngFor="let code of file.codeLists" class="nested-checkbox">
              <input type="checkbox" [checked]="isCodeSelected(item.id, file.name, code.title)" (change)="toggleCodeSelection(item.id, file.name, code.title)" />
              {{ code.title }}
            </div>
          </div>
        </div>
        <br>
      </ng-template>
    </ng-select> -->
    <div class="chat-input-container">
      <div class="chat-input">
        <!-- (input)="filterSuggestions()"  -->
        <!-- (keydown.enter)="selectSuggestion()" -->
        <!-- (keydown.arrowDown)="navigateSuggestions(1)"
        (keydown.arrowUp)="navigateSuggestions(-1)" -->
        <input
          type="text"
          [(ngModel)]="userInput"
          (click)="isOpen = true"
          (keyup.enter)="sendMessage()"
          placeholder="Type a message..."
          #messageInput
        />
        <button (click)="sendMessage()">Send</button>
      </div>

      <!-- Suggestions List -->
      <div *ngIf="dataSuggestions.length && isOpen" class="suggestions-box">
        <span style="    position: absolute;
  right: 18px;" (click)="isOpen = !isOpen">X</span>
        <div
          *ngFor="
            let data of dataSuggestions;
            let i = index
          "
          class="suggestion-item"
        >
          <h3 class="suggestion-title">{{ data.title }}</h3>

          <ul *ngIf="data.filesList.length" class="files-list">
            <ng-container *ngFor="let file of data.filesList; let j = index">
              <input
                type="checkbox"
                [(ngModel)]="file.isChecked"
                class="file-checkbox"
                (change)="fileCheck($event, i, j)"
              />
              <li class="file-item">
                <div class="file-content">
                  <div class="file-info">
                    <strong class="file-title">{{ file.title }}</strong>
                    <p
                      class="file-description"
                      [innerText]="file.description?.trim()"
                    ></p>
                  </div>
                </div>
                <br />
              </li>
              <div style="margin-left: 33px">
                <ng-container *ngFor="let code of file.codeLists">
                  <input
                    style="position: relative;left: -20px;top: 26px;"
                    type="checkbox"
                    [(ngModel)]="code.isChecked"
                    class="file-checkbox"
                    (change)="updateCheck(i, j)"
                  />
                  <div class="file-info">
                    <strong class="file-title">{{ code.title }}</strong>
                    <p
                      class="file-description"
                      [innerText]="code.description?.trim()"
                    ></p>
                  </div>
                </ng-container>
              </div>
            </ng-container>
          </ul>
        </div>
      </div>
    </div>
    <div class="chat-container">
      <div class="chat-box" #chatBox>
        <div *ngFor="let message of messages" class="message-wrapper">
          <ng-container *ngIf="message.isUser; else aiMessage">
            <div class="user-message">
              <ng-container *ngFor="let message of message.text">
                {{ message.title }} -
                <ng-container
                  *ngFor="let child of message.childTitles; let last = last"
                >
                  <span
                    >{{ child }}
                    <ng-container *ngIf="!last">, </ng-container></span
                  >
                </ng-container>
                <br />
              </ng-container>
            </div>
          </ng-container>

          <ng-template #aiMessage>
            <div class="ai-message">
              <ng-container *ngFor="let val of message.data;let pi = index">
                <h2 class="message-title" style="text-align: center;margin-left: -2px">
                 {{ val.title }}
                </h2>
                <hr />
                <ng-container *ngFor="let file of val.filesList;let fi = index">
                  <h3 style="margin-left: -5px" class="message-title">{{fi+1}}) {{ file.title }}</h3>
                  <p
                    class="message-description"
                    [innerText]="file.description?.trim()"
                  ></p>
                  <ng-container *ngFor="let codeBlock of file.codeLists">
                    <h3 class="message-title">{{ codeBlock.title }}</h3>
                    <p
                      class="message-description"
                      [innerText]="codeBlock.description?.trim()"
                    ></p>
                    <div class="code-block ml-3 mb-3" style="margin-left: 3px">
                      <pre
                        class="code-content"
                      ><code>{{ codeBlock.code }}</code></pre>
                    </div>
                  </ng-container>
                </ng-container>
              </ng-container>
              <div class="typing-indicator" *ngIf="message.isTyping">...</div>
            </div>
          </ng-template>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      :host {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        overflow: hidden;
        background: #f4f4f4;
      }

      .suggestions-box {
        max-height: 400px; /* Adjust height to increase visible area */
        overflow-y: auto; /* Allow scrolling when content overflows */
        border: 1px solid #ddd;
        padding: 15px;
        background-color: #f9f9f9;
        border-radius: 8px;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
      }

      .suggestion-item {
        margin-bottom: 20px;
      }

      .suggestion-title {
        font-size: 18px;
        font-weight: bold;
        color: #333;
        margin-bottom: 10px;
      }

      .files-list {
        padding-left: 20px;
      }

      .file-item {
        display: flex;
        align-items: center;
        padding: 8px 0;
        border-bottom: 1px solid #eee;
      }

      .file-item:last-child {
        border-bottom: none;
      }

      .file-content {
        display: flex;
        align-items: center;
        width: 100%;
      }

      .file-checkbox {
        margin-right: 10px;
        position: relative;
        top: 36px;
        left: -9px;
        cursor: pointer;
      }

      .file-info {
        display: flex;
        flex-direction: column;
      }

      .file-title {
        font-size: 16px;
        font-weight: bold;
        color: #555;
      }

      .file-description {
        font-size: 14px;
        color: #777;
        margin-top: 5px;
      }

      .file-item:hover {
        // background-color: #f0f0f0;
      }

      .file-checkbox:checked + .file-info {
        // background-color: #e0ffe0; /* Highlight selected items */
      }

      .message-wrapper {
        display: flex;
        flex-direction: column;
        gap: 10px;
      }

      .ai-message {
        background: #f1f1f1;
        color: black;
        align-self: flex-start;
        padding: 15px;
        border-radius: 12px;
        box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
        position: relative;
        max-width: 80%;
        animation: fadeIn 1s ease-out;
        word-wrap: break-word;
      }

      .user-message {
        background: #007bff;
        color: white;
        align-self: flex-end;
        padding: 12px;
        border-radius: 12px;
        max-width: 80%;
      }

      @keyframes fadeIn {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }

      .typing-indicator {
        font-size: 16px;
        color: #888;
        position: absolute;
        bottom: 5px;
        left: 10px;
      }

      /* Styling for Title and Description */
      .message-title {
        font-size: 16px;
        font-weight: bold;
        color: #333;
        margin-bottom: 8px;
      }

      .message-description {
        font-size: 14px;
        color: #555;
        margin-bottom: 10px;
      }

      /* Code Block Styling */
      .code-block {
        background: #272822;
        color: #f8f8f2;
        padding: 10px;
        border-radius: 8px;
        overflow-x: auto;
        font-size: 13px;
        box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
        margin-top: 10px;
      }

      .code-title {
        font-size: 14px;
        font-weight: bold;
        color: #ffd700;
        margin-bottom: 5px;
      }

      .code-content {
        font-family: 'Courier New', monospace;
        white-space: pre-wrap;
        word-wrap: break-word;
      }

      .chat-container {
        width: 100%;
        // height: 100vh;
        display: flex;
        flex-direction: column;
        background: white;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
        overflow: hidden;
      }

      .chat-box {
        flex: 1;
        overflow-y: auto;
        padding: 15px;
        display: flex;
        flex-direction: column;
        gap: 10px;
        background: #f9f9f9;
      }

      .chat-input-container {
        position: fixed;
        z-index: 9999;
        // bottom: 0;
        left: 0;
        top: 55px;
        width: 100%;
        background: white;
        border-top: 1px solid #ddd;
        padding: 10px;
      }

      .chat-input {
        display: flex;
        width: 100%;
      }

      .chat-input input {
        flex: 1;
        padding: 12px;
        border: 1px solid #ccc;
        border-radius: 5px;
        outline: none;
        font-size: 14px;
        width: 100%;
      }

      .chat-input button {
        margin-left: 10px;
        padding: 12px 15px;
        border: none;
        background: #007bff;
        color: white;
        border-radius: 5px;
        cursor: pointer;
        font-size: 14px;
      }

      /* Suggestions Box */
      .suggestions-box {
        position: absolute;
        // bottom: 50px; /* Position above the input field */
        left: 10px;
        background: white;
        width: calc(100% - 20px);
        max-height: 550px;
        overflow-y: auto;
        border: 1px solid #ccc;
        border-radius: 5px;
        list-style: none;
        padding: 5px;
        margin: 0;
        box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
      }

      .suggestions-box li {
        padding: 10px;
        cursor: pointer;
        font-size: 14px;
      }

      .suggestions-box li:hover,
      .active-suggestion {
        // background: #007bff;
        // color: white;
      }

      /* Responsive */
      @media screen and (max-width: 768px) {
        .chat-container {
          width: 100%;
          // height: 100vh;
        }
        .chat-input-container {
          padding: 8px;
          z-index: 9999;
          top: 55px;
        }
        .chat-input input {
          font-size: 12px;
          padding: 10px;
        }
        .chat-input button {
          font-size: 12px;
          padding: 10px;
        }
      }
    `,
  ],
})
export class ChatComponent implements AfterViewInit {
  @ViewChild('chatBox') chatBox!: ElementRef;
  @ViewChild('messageInput') messageInput!: ElementRef;

  userInput: string = '';
  messages: { text: any; isUser: boolean; data?: any; isTyping?: boolean }[] =
    [];

  dataSuggestions: any = [];

  // Suggestions

  isOpen = false;

  constructor() {
    this.assignOriginalData();
  }

  ngAfterViewInit() {
    this.scrollToBottom();
  }

  fileCheck(event: any, parentInd: number, fileIndex: number) {
    const isChecked = event.target.checked;
    this.dataSuggestions[parentInd].filesList[fileIndex].codeLists.forEach(
      (val: any) => {
        val.isChecked = isChecked;
      }
    );
    this.dataSuggestions[parentInd].filesList[fileIndex].isChecked =
      this.dataSuggestions[parentInd].filesList[fileIndex].codeLists.length >
        0 &&
      this.dataSuggestions[parentInd].filesList[fileIndex].codeLists.every(
        (val: any) => val.isChecked
      );
  }

  updateCheck(parentInd: number, fileIndex: number) {
    this.dataSuggestions[parentInd].filesList[fileIndex].isChecked =
      this.dataSuggestions[parentInd].filesList[fileIndex].codeLists.length >
        0 &&
      this.dataSuggestions[parentInd].filesList[fileIndex].codeLists.every(
        (val: any) => val.isChecked
      );
  }

  sendMessage() {
    console.log('sss');
    this.isOpen = !this.isOpen;
    let formattedValue = JSON.parse(JSON.stringify(this.dataSuggestions));
    formattedValue.forEach((val: any) => {
      val.filesList.forEach((file: any) => {
        file.codeLists = file.codeLists.filter((code: any) => code.isChecked);
        file.isChecked = file.codeLists.length > 0;
      });
      val.filesList = val.filesList.filter((file: any) => file.isChecked);
    });

    formattedValue = formattedValue.filter(
      (val: any) => val.filesList.length > 0
    );
    let titles = formattedValue.map((val: any) => ({
      title: val.title,
      childTitles: val.filesList.map((vall: any) => vall.title),
    }));

    if (formattedValue.length === 0) return;

    this.messages.push({ text: titles, isUser: true });

    // Simulate AI response with typing effect
    this.messages.push({
      text: '',
      isUser: false,
      isTyping: true,
      data: formattedValue,
    });
    this.scrollToBottom();

    setTimeout(() => {
      const aiMessage = "This is AI's response!";
      this.typingEffect(aiMessage);
      this.scrollToBottom();
    }, 1000);

    this.userInput = '';
    this.scrollToBottom();

    this.assignOriginalData();
  }

  assignOriginalData(): void {
    // this.data = JSON.parse(JSON.stringify(learningList));
    this.dataSuggestions = JSON.parse(JSON.stringify(learningList));
  }

  typingEffect(message: string) {
    const aiMessage = this.messages[this.messages.length - 1];
    let index = 0;

    aiMessage.isTyping = false;
    aiMessage.text = ''; // Reset the message text
    const interval = setInterval(() => {
      aiMessage.text += message[index];
      index++;
      if (index === message.length) clearInterval(interval);
    }, 100); // Typing speed in milliseconds
  }

  scrollToBottom() {
    setTimeout(() => {
      this.chatBox.nativeElement.scrollTop =
        this.chatBox.nativeElement.scrollHeight;
    }, 50);
  }
  customSearchFn(term: string, item: any): boolean {
    term = term.toLowerCase();
    return (
      item?.title?.toLowerCase().includes(term) ||
      item?.description?.toLowerCase().includes(term) ||
      item?.filesList?.some(
        (file: any) =>
          file?.name?.toLowerCase()?.includes(term) ||
          file?.title.toLowerCase()?.includes(term) ||
          file?.description?.toLowerCase().includes(term) ||
          file?.codeLists?.some((code: any) =>
            code?.title?.toLowerCase().includes(term)
          )
      )
    );
  }

  isFileSelected(sizeId: number, fileName: string): boolean {
    // Implement logic to check if the file is selected
    return false;
  }

  isCodeSelected(sizeId: number, fileName: string, codeTitle: string): boolean {
    // Implement logic to check if the code is selected
    return false;
  }

  toggleSizeSelection(sizeId: number): void {
    // Implement logic to toggle size selection
  }

  toggleFileSelection(sizeId: number, fileName: string): void {
    // Implement logic to toggle file selection
  }

  toggleCodeSelection(
    sizeId: number,
    fileName: string,
    codeTitle: string
  ): void {
    // Implement logic to toggle code selection
  }
}
