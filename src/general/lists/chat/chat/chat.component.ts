
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import SimplePeer from 'simple-peer';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  peer1: SimplePeer.Instance | null = null;
  peer2: SimplePeer.Instance | null = null;
  messages: string[] = [];
  errorMessage: string = '';

  constructor() {}

  ngOnInit(): void {
    try {
      // Initialize peers
      this.peer1 = new SimplePeer({ initiator: true, trickle: false });
      this.peer2 = new SimplePeer({ trickle: false });

      // Handle signaling data
      this.peer1.on('signal', (data: any) => {
        console.log('Peer1 Signal Data:', data);
        this.peer2?.signal(data); // Send data to Peer2
      });

      this.peer2.on('signal', (data: any) => {
        console.log('Peer2 Signal Data:', data);
        this.peer1?.signal(data); // Send data to Peer1
      });

      // Handle connection established
      this.peer1.on('connect', () => {
        console.log('Peer1 connected to Peer2!');
        this.sendMessage('Hello from Peer1!');
      });

      // Handle data reception
      this.peer2.on('data', (data: any) => {
        console.log('Peer2 received message:', data.toString());
        this.messages.push(data.toString());
      });

      // Handle error events
      this.peer1.on('error', (err) => this.handleError(err, 'Peer1'));
      this.peer2.on('error', (err) => this.handleError(err, 'Peer2'));
    } catch (error) {
      console.error('Error initializing peers:', error);
      this.errorMessage = 'Failed to initialize peers.';
    }
  }

  // Function to send a message from Peer1
  sendMessage(message: string) {
    if (this.peer1 && this.peer1.connected) {
      this.peer1.send(message);
      console.log('Peer1 sent message:', message);
    } else {
      console.error('Peer1 is not connected.');
      this.errorMessage = 'Peer1 is not connected.';
    }
  }

  // Reset peers and messages
  reset() {
    this.peer1?.destroy();
    this.peer2?.destroy();
    this.messages = [];
    this.errorMessage = '';
    this.ngOnInit(); // Reinitialize
  }

  // Handle errors
  handleError(error: any, peerName: string) {
    console.error(`${peerName} Error:`, error);
    this.errorMessage = `${peerName} encountered an error: ${error.message}`;
  }
}
