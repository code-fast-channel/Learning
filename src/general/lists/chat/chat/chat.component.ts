import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import SimplePeer from 'simple-peer';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  private peer: SimplePeer.Instance | null = null;
  messages: string[] = [];
  newMessage: string = '';

  ngOnInit() {}

  // Initialize peer with the initiator flag
  initializePeer(initiator: boolean) {
    this.peer = new SimplePeer({ initiator, trickle: false });

    // On signal event, send the signal data to the other peer
    this.peer.on('signal', (data: any) => {
      console.log('Signal Data:', JSON.stringify(data));
      alert('Share this Signal Data with the other peer: ' + JSON.stringify(data));
    });

    // On receiving data from the other peer, add it to the messages
    this.peer.on('data', (data: any) => {
      this.messages.push(data.toString());
    });

    // On error handling
    this.peer.on('error', (err: any) => {
      console.error('Error:', err);
    });
  }

  // Handle signal from the other peer
  receiveSignal(signal: string) {
    if (this.peer) {
      // Pass the signal data to the peer
      this.peer.signal(JSON.parse(signal));
    }
  }

  // Send a message to the other peer
  sendMessage() {
    if (this.newMessage.trim() && this.peer) {
      this.peer.send(this.newMessage);  // Send the message through the peer connection
      this.messages.push(this.newMessage);  // Add the message to the local list
      this.newMessage = '';  // Clear the input field
    }
  }
}
