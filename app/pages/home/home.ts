import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WebSockets } from '../../providers/web-socket/web-socket';
import { GlobalService } from '../../providers/global-service/global-service';
import { ChatScroll } from '../../components/chat-scroll/chat-scroll';

@Component({
  templateUrl: 'build/pages/home/home.html',
  providers: [WebSockets],
  directives: [ChatScroll]
})
export class HomePage {
  public username;
  public message; // Message field model
  public chatMessages: Array<Object> = new Array(); // Main messages array

  constructor(private ws: WebSockets, private nav: NavController, private gs:GlobalService) {
    this.getUsername();

    // Setting receive message callback
    this.ws.onMessage(e => {
      this.delegateData(e); // Decide how to process message
    })

    this.ws.connect(); // Connect WebSocket
  }

  getUsername() { // Get username from storage
    this.username = this.gs.get('username'); 
  }

  delegateData(e) {
    let data = JSON.parse(e.data); // Parsing data

    if(data.t === 'm') { // Message type
      let message = { // Composing message
        messageClass: (data.u === this.username)? 'self': '',
        username: data.u, 
        message: data.m
      }

      this.chatMessages.push(message); // Pushing message to view
    }
  }

  sendMessage() {
    if (!this.message) return;

    let result = JSON.stringify({ // Composing message
      t: 'm',
      u: this.username, 
      m: this.message
    });
    this.ws.send(result);
    this.message = '';
  }
}
