import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { GlobalService } from '../../providers/global-service/global-service';

@Component({
  templateUrl: 'build/pages/login/login.html',
})
export class LoginPage {
	public username;

  constructor(private navCtrl: NavController, private gs: GlobalService) {}

  saveData() {
  	if(this.username.lenght < 1) return;
  	
    this.gs.set('username', this.username);
  	this.navCtrl.push(HomePage);
  }
}