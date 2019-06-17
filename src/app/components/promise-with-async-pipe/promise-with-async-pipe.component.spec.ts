import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromiseWithAsyncPipeComponent } from './promise-with-async-pipe.component';

describe('PromiseWithAsyncPipeComponent', () => {
  let component: PromiseWithAsyncPipeComponent;
  let fixture: ComponentFixture<PromiseWithAsyncPipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromiseWithAsyncPipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromiseWithAsyncPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
