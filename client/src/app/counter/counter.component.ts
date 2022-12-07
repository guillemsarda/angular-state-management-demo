import { Component } from '@angular/core';
import Store from '../Store';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent {
  counter = 0;

  ngOnInit() {
    Store.counter.subscribe(val => (this.counter = val));
  }
}
