import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableWithSubscriptionComponent } from './observable-with-subscription.component';

describe('ObservableWithSubscriptionComponent', () => {
  let component: ObservableWithSubscriptionComponent;
  let fixture: ComponentFixture<ObservableWithSubscriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObservableWithSubscriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservableWithSubscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
