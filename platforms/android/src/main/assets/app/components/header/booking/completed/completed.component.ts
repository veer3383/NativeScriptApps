import { Component, OnInit, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: "ns-complete",
    moduleId: module.id,
    templateUrl: "./completed.component.html",
    styleUrls: ["./completed.common.css", "./completed.component.css"]
})
export class CompletedComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }
}