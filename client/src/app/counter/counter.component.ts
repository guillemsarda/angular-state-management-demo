import { Component } from '@angular/core';
/* Using an Injectable */
import { StoreService } from '../store.service';
/* Using a regular Class */
import Store from '../Store';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent {
  constructor(private store: StoreService) {}

  counter = 0;

  ngOnInit() {
    /* Injectable: */
    this.store.counter.subscribe(val => (this.counter = val));
    /* Class: */
    // Store.counter.subscribe(val => (this.counter = val));
  }
}
