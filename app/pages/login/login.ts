import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage, LocalStorage } from 'ionic-angular';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'build/pages/login/login.html',
})
export class LoginPage {
	public username;
	private localStorage;

  constructor(private navCtrl: NavController) {
  	this.localStorage = new Storage(LocalStorage);
  }

  saveData() {
  	this.localStorage.set('username', this.username);
  	this.navCtrl.push(HomePage);
  }
}
