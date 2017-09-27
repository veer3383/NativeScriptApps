import { Component, OnInit } from "@angular/core";
import { Page } from "ui/page";
import {registerElement} from "nativescript-angular/element-registry";

@Component({
  selector: "my-app",
  template: `
    <!-- Your UI components go here -->
    <StatusBar ios:barStyle="light" android:barStyle="red"></StatusBar>
    <page-router-outlet></page-router-outlet>
  `,
  styleUrls: ["./app.common.css"]
})
export class AppComponent implements OnInit {
  private i: any;
  constructor(private page: Page) {
      this.page.actionBarHidden = true;
     // registerElement("StatusBar", () => require("nativescript-statusbar").StatusBar);      
  }

  ngOnInit() {
  }
}