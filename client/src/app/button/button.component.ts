import { Component, Input } from '@angular/core';
/* Using an Injectable */
import { StoreService } from '../store.service';
/* Using a regular Class */
import Store from '../Store';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  @Input() title = '';

  constructor(private store: StoreService) {}

  modify(action: string) {
    /* Injectable: */
    this.store.modifyCounter(action.toUpperCase());
    /* Class: */
    // Store.modifyCounter(action.toUpperCase());
  }
}
