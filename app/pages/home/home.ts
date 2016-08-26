import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WebSockets } from '../../providers/web-socket/web-socket';

@Component({
  templateUrl: 'build/pages/home/home.html',
  providers: [WebSockets]
})
export class HomePage {
  public message = "aldruin";
  public chatMessages: Array<Object> = new Array();

  constructor(private ws: WebSockets, private nav: NavController) {
    this.listenMessage();
  }

  listenMessage() {
    this.ws.listen(e => {
      this.chatMessages.push(e.data);
      
      console.log(e.data);
    })
  }

  sendMessage() {
    this.ws.send(this.message);
  }
}
