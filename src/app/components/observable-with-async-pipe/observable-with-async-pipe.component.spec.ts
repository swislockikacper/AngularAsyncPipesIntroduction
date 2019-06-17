import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableWithAsyncPipeComponent } from './observable-with-async-pipe.component';

describe('ObservableWithAsyncPipeComponent', () => {
  let component: ObservableWithAsyncPipeComponent;
  let fixture: ComponentFixture<ObservableWithAsyncPipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObservableWithAsyncPipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservableWithAsyncPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
