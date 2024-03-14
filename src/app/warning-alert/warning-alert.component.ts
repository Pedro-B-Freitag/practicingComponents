import { Component } from "@angular/core";

@Component({
    selector:'warning-alert',
    templateUrl: './warning-alert.component.html',
    styles: `
    p{
      padding: 20px;
      border: 1px solid red;
      background-color: pink;
    }
    `
})
export class WarningAlert {
    title = 'practicingComponents';
  }