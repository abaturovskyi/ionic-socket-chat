import { Component } from '@angular/core';
import { ionicBootstrap, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { LoginPage } from './pages/login/login';
import { GlobalService } from './providers/global-service/global-service';

@Component({
  template: '<ion-nav [root]="rootPage"></ion-nav>'
})
export class MyApp {
  rootPage: any = LoginPage;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.

  		Splashscreen.hide();
      StatusBar.styleDefault();
    });
  }
}

ionicBootstrap(MyApp, [GlobalService]); // Bootstrapping Global Service for username storage