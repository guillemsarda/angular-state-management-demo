import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxCounterComponent } from './box-counter.component';

describe('BoxCounterComponent', () => {
  let component: BoxCounterComponent;
  let fixture: ComponentFixture<BoxCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxCounterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoxCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
