import { Component, OnInit, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: "ns-cancel",
    moduleId: module.id,
    templateUrl: "./cancelled.component.html",
    styleUrls: ["./cancelled.common.css", "./cancelled.component.css"]
})
export class CancelledComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }
}