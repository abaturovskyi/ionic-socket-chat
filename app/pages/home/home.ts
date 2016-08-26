import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GitHub } from '../../providers/web-socket/web-socket';

@Component({
  templateUrl: 'build/pages/home/home.html',
  providers: [GitHub]
})
export class HomePage {
	public foundRepos;
  public username = "aldruin";

  constructor(private github: GitHub, private nav: NavController) {}

  getRepos() {
    this.github.getRepos(this.username).subscribe(
      data => {
        this.foundRepos = data.json();
      },
      err => console.error(err),
      () => console.log('getRepos completed')
    );
  }

  // goToDetails(repo) {  
  //   this.nav.push(DetailsPage, { repo: repo });
	// }
}
