import { Injectable } from '@angular/core';
import { Inject } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class GlobalService {
  get(attr) {
    if(typeof this[attr] === 'undefined') return;
    return this[attr];
  }

  set(attr, val) {
  	if(typeof val === 'undefined') return;
    this[attr] = val;
    return this[attr];
  }
}

