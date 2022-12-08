import { Component, OnInit } from '@angular/core';
/* Using an Injectable */
import { StoreService } from '../store.service';
/* Using a regular Class */
import Store from '../Store';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor(private store: StoreService) {}

  counter = 0;

  ngOnInit() {
    /* Injectable: */
    this.store.counter.subscribe(val => (this.counter = val));
    /* Class: */
    // Store.counter.subscribe(val => (this.counter = val));
  }
}
