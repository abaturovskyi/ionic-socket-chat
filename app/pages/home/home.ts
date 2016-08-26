import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WebSockets } from '../../providers/web-socket/web-socket';

@Component({
  templateUrl: 'build/pages/home/home.html',
  providers: [WebSockets]
})
export class HomePage {
	public foundRepos;
  public username = "aldruin";

  constructor(private ws: WebSockets, 
    private nav: NavController) {}

  getRepos() {
    this.ws.send(this.username);
  }

  // goToDetails(repo) {  
  //   this.nav.push(DetailsPage, { repo: repo });
	// }
}
