import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WebSockets } from '../../providers/web-socket/web-socket';

@Component({
  templateUrl: 'build/pages/home/home.html',
  providers: [WebSockets]
})
export class HomePage {
  public message = "aldruin";

  constructor(private ws: WebSockets, private nav: NavController) {}

  sendMessage() {
    this.ws.send(this.message);
  }
}
