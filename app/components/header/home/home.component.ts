import { Component, OnInit, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: "ns-home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
    styleUrls: ["./home.common.css", "./home.component.css"]
})
export class HomeComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }
}