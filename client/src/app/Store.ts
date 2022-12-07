import { BehaviorSubject } from 'rxjs';

class Store {
  counter = new BehaviorSubject(0);

  getStaticCounter() {
    return this.counter.getValue();
  }

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

export default new Store();
