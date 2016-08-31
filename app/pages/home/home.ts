import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WebSockets } from '../../providers/web-socket/web-socket';
import { ChatScroll } from '../../components/chat-scroll/chat-scroll';
import { Storage, LocalStorage } from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/home/home.html',
  providers: [WebSockets],
  directives: [ChatScroll]
})
export class HomePage {
  public username;
  public message; // Message field model
  public chatMessages: Array<Object> = new Array(); // Main messages array
  private localStorage;

  constructor(private ws: WebSockets, private nav: NavController) {
    this.getUsername();

    // Setting receive message callback
    this.ws.onMessage(e => {
      this.delegateData(e);
    })

    this.ws.connect();
  }

  getUsername() {
    this.localStorage = new Storage(LocalStorage);

    this.localStorage.get('username').then((username) => {
      this.username = username;
    });
  }

  delegateData(e) {
    let data = JSON.parse(e.data); // Parsing data

    if(data.t === 'm') { // Message type
      let message = { // Composing message
        messageClass: (data.u === this.username)? 'self': '',
        username: data.u, 
        message: data.m
      }

      // Pushing message to view
      this.chatMessages.push(message);
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
