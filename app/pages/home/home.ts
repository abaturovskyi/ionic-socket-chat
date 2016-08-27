import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WebSockets } from '../../providers/web-socket/web-socket';
import { ChatScroll } from '../../components/chat-scroll/chat-scroll'

@Component({
  templateUrl: 'build/pages/home/home.html',
  providers: [WebSockets],
  directives: [ChatScroll]
})
export class HomePage {
  public username = "Artem";
  public message; // Message field model

  public chatMessages: Array<Object> = new Array(); // Main messages array

  constructor(private ws: WebSockets, private nav: NavController) {
    // Setting receive message callback
    this.ws.listen(e => {
      let data = JSON.parse(e.data); // Parsing data

      let message = { // Composing message
        messageClass: (data.username === this.username)? 'self': '',
        username: data.username, 
        message: data.message
      }

      // Pushing message to view
      this.chatMessages.push(message);
    })
  }

  sendMessage() {
    let result = JSON.stringify({
      username: this.username, 
      message: this.message
    });
    this.ws.send(result);
  }
}
