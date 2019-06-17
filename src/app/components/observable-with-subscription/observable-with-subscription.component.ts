import { Component, OnDestroy } from "@angular/core";
import { Observable, from, of } from "rxjs";
import { delay } from "rxjs/internal/operators";

@Component({
  selector: "observable-with-subscription",
  templateUrl: "./observable-with-subscription.component.html",
  styleUrls: ["./observable-with-subscription.component.scss"]
})
export class ObservableWithSubscriptionComponent implements OnDestroy {
  observableData: number;
  subscription: object = null;
  text = "Observable completed.";

  constructor() {
    this.subscribeObservable();
  }

  subscribeObservable = () =>
    (this.subscription = this.getObservable().subscribe(
      o => (this.observableData = o)
    ));

  getObservable = (): Observable<number> => {
    return from(this.text).pipe(o => of(this.text).pipe(delay(5000)));
  };

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
