import { Component, Input } from '@angular/core';
import Store from '../Store';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  @Input() title = '';

  modify(action: string) {
    Store.modifyCounter(action.toUpperCase());
  }
}
