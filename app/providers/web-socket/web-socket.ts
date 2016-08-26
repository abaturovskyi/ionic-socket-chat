import { Injectable } from '@angular/core';
import {$WebSocket} from 'angular2-websocket/angular2-websocket'
import 'rxjs/add/operator/map';

@Injectable()
export class WebSocket {

  constructor(private ws: WebSocket) {}

  // getRepos(username) {
  //    let repos = this.ws.get(`https://api.github.com/users/${username}/repos`);
  //    return repos;
  //  }

  //  getDetails(repo) {
  //    return this.ws;
  //  }
}

