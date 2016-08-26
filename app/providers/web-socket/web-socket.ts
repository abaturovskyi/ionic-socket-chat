import { Injectable } from '@angular/core';
import { Inject } from '@angular/core';
import { $WebSocket } from 'angular2-websocket/angular2-websocket';
import 'rxjs/add/operator/map';

@Injectable()
export class WebSockets {
  private ws;

  constructor() {
    this.ws = new WebSocket('ws://echo.websocket.org');

    this.ws.onerror   = (evt) => console.log(`Error: ${evt}`);
    this.ws.onclose   = (evt) => console.log("** Closed **");
    this.ws.onopen    = (evt) => console.log("** Opened ***");
  }

  listen(callback: any) {
    this.ws.onmessage = callback;
  }

  send(message: any) {
    this.ws.send(message);
  }
}

