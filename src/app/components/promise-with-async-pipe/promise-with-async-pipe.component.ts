import { Component } from "@angular/core";

@Component({
  selector: "promise-with-async-pipe",
  templateUrl: "./promise-with-async-pipe.component.html",
  styleUrls: ["./promise-with-async-pipe.component.scss"]
})
export class PromiseWithAsyncPipeComponent {
  promise: Promise<string>;

  constructor() {
    this.promise = this.getPromise();
  }

  getPromise = (): Promise<string> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve("Promise Completed."), 5000);
    });
  };
}
