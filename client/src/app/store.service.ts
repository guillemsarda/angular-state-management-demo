import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  counter = new BehaviorSubject(0);

  constructor() {}

  modifyCounter(action: string) {
    switch (action) {
      case 'INCREMENT':
        this.counter.next(this.counter.value + 1);
        break;
      case 'DECREMENT':
        this.counter.next(this.counter.value - 1);
        break;
      default:
        break;
    }
  }
}
