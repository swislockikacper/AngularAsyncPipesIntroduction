import { Component } from "@angular/core";

@Component({
  selector: "promise",
  templateUrl: "./promise.component.html",
  styleUrls: ["./promise.component.scss"]
})
export class PromiseComponent {
  promiseData: string;

  constructor() {
    this.getPromise().then(p => (this.promiseData = p));
  }

  getPromise = (): Promise<string> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve("Promise Completed."), 5000);
    });
  };
}
