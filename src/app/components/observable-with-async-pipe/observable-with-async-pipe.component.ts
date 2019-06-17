import { Component } from "@angular/core";
import { Observable, from, of } from "rxjs";
import { delay } from "rxjs/internal/operators";

@Component({
  selector: "observable-with-async-pipe",
  templateUrl: "./observable-with-async-pipe.component.html",
  styleUrls: ["./observable-with-async-pipe.component.scss"]
})
export class ObservableWithAsyncPipeComponent {
  observable: Observable<string>;
  text = "Observable completed.";

  constructor() {
    this.observable = this.getObservable();
  }

  getObservable = (): Observable<string> => {
    return from(this.text).pipe(o => of(this.text).pipe(delay(5000)));
  };
}
