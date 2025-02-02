import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { learningList } from '../learning.constant';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [FormsModule, CommonModule],
  template: `
    <div class="chat-container">
      <div class="chat-box" #chatBox>
        <div *ngFor="let message of messages" class="message-wrapper">
          <ng-container *ngIf="message.isUser; else aiMessage">
            <div class="user-message">
              {{ message.text }}
            </div>
          </ng-container>

          <ng-template #aiMessage>
            <div class="ai-message">
              <ng-container *ngFor="let item of message.data">
                <h3 class="message-title">{{ item.title }}</h3>
                <p class="message-description" [innerText]="item.description"></p>

                <div *ngFor="let codeBlock of item.codeLists" class="code-block">
                  <h4 class="code-title">{{ codeBlock.title }}</h4>
                  <pre class="code-content"><code>{{ codeBlock.code }}</code></pre>
                </div>
              </ng-container>
              <div class="typing-indicator" *ngIf="message.isTyping">...</div>
            </div>
          </ng-template>
        </div>
      </div>

      <div class="chat-input-container">
        <div class="chat-input">
          <input type="text" [(ngModel)]="userInput" 
                 (input)="filterSuggestions()" 
                 (keyup.enter)="sendMessage()"
                 (keydown.arrowDown)="navigateSuggestions(1)"
                 (keydown.arrowUp)="navigateSuggestions(-1)"
                 (keydown.enter)="selectSuggestion()"
                 placeholder="Type a message..." 
                 #messageInput />
          <button (click)="sendMessage()">Send</button>
        </div>

        <!-- Suggestions List -->
        <div *ngIf="dataSuggestions.length" class="suggestions-box">
  <div *ngFor="let suggestion of dataSuggestions; let i = index" class="suggestion-item">
    <h3 class="suggestion-title">{{ suggestion.title }}</h3>

    <ul *ngIf="suggestion.filesList.length" class="files-list">
      <li *ngFor="let file of suggestion.filesList; let j = index" class="file-item">
        <div class="file-content">
          <input type="checkbox" [(ngModel)]="file.isChecked" class="file-checkbox" />
          <div class="file-info">
            <strong class="file-title">{{ file.title }}</strong>
            <p class="file-description" [innerText]="file.description?.trim()"></p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</div>

      </div>
    </div>
  `,
  styles: [`
    :host {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      overflow: hidden;
      background: #f4f4f4;
    }

    .suggestions-box {
  max-height: 400px;  /* Adjust height to increase visible area */
  overflow-y: auto;   /* Allow scrolling when content overflows */
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
  background-color: #f0f0f0;
}

.file-checkbox:checked + .file-info {
  background-color: #e0ffe0; /* Highlight selected items */
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
      from { opacity: 0; }
      to { opacity: 1; }
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
      color: #FFD700;
      margin-bottom: 5px;
    }

    .code-content {
      font-family: 'Courier New', monospace;
      white-space: pre-wrap;
      word-wrap: break-word;
    }

    .chat-container {
      width: 100%;
      height: 100vh;
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
      bottom: 0;
      left: 0;
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
      bottom: 50px; /* Position above the input field */
      left: 10px;
      background: white;
      width: calc(100% - 20px);
      max-height: 150px;
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
      background: #007bff;
      color: white;
    }

    /* Responsive */
    @media screen and (max-width: 768px) {
      .chat-container {
        width: 100%;
        height: 100vh;
      }
      .chat-input-container {
        padding: 8px;
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
  `]
})
export class ChatComponent implements AfterViewInit {
  @ViewChild('chatBox') chatBox!: ElementRef;
  @ViewChild('messageInput') messageInput!: ElementRef;
  
  userInput: string = '';
  messages: { text: string, isUser: boolean, data?: any, isTyping?: boolean }[] = [];

  data = structuredClone(learningList);

  dataSuggestions: any = structuredClone(learningList);
  
  // Suggestions
  suggestions: string[] = ['Hello', 'How are you?', 'What is your name?', 'Tell me a joke', 'Give me a quote'];
  filteredSuggestions: string[] = [];
  selectedSuggestionIndex: number = -1;

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit() {
    this.scrollToBottom();
  }

  sendMessage() {
    if (!this.userInput.trim()) return;

    this.messages.push({ text: this.userInput, isUser: true });

    // Simulate AI response with typing effect
    this.messages.push({ text: '', isUser: false, isTyping: true,data: this.data[0].filesList });
    this.scrollToBottom();

    setTimeout(() => {
      const aiMessage = "This is AI's response!";
      this.typingEffect(aiMessage);
      this.scrollToBottom();
    }, 1000);

    this.userInput = '';
    this.filteredSuggestions = [];
    this.selectedSuggestionIndex = -1;
    this.scrollToBottom();
  }

  typingEffect(message: string) {
    const aiMessage = this.messages[this.messages.length - 1];
    let index = 0;

    aiMessage.isTyping = false;
    aiMessage.text = '';  // Reset the message text
    const interval = setInterval(() => {
      aiMessage.text += message[index];
      index++;
      if (index === message.length) clearInterval(interval);
    }, 100); // Typing speed in milliseconds
  }

  scrollToBottom() {
    setTimeout(() => {
      this.chatBox.nativeElement.scrollTop = this.chatBox.nativeElement.scrollHeight;
    }, 50);
  }

  filterSuggestions() {
    if (!this.userInput.trim()) {
      this.filteredSuggestions = [];
      return;
    }
    
    this.filteredSuggestions = this.suggestions.filter(s =>
      s.toLowerCase().includes(this.userInput.toLowerCase())
    );

    this.selectedSuggestionIndex = -1;
  }

  navigateSuggestions(direction: number) {
    if (!this.filteredSuggestions.length) return;

    this.selectedSuggestionIndex += direction;
    if (this.selectedSuggestionIndex < 0) this.selectedSuggestionIndex = this.filteredSuggestions.length - 1;
    if (this.selectedSuggestionIndex >= this.filteredSuggestions.length) this.selectedSuggestionIndex = 0;
  }

  selectSuggestion(suggestion?: string) {
    if (suggestion) {
      this.userInput = suggestion;
    } else if (this.selectedSuggestionIndex >= 0) {
      this.userInput = this.filteredSuggestions[this.selectedSuggestionIndex];
    }

    this.filteredSuggestions = [];
    this.selectedSuggestionIndex = -1;
  }
}
