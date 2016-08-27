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
  public message = "aldruin"; // Message field model
  public chatMessages: Array<Object> = new Array(); // Main messages array

  constructor(private ws: WebSockets, private nav: NavController) {
    // Setting receive message callback
    this.ws.listen(e => {
      this.chatMessages.push(e.data);
    })
  }

  sendMessage() {
    this.ws.send(this.message);
  }
}
