import { Component, OnInit, EventEmitter, Input, Output } from "@angular/core";
import * as tnsOAuthModule from 'nativescript-oauth';
import * as dialogs from 'ui/dialogs';


@Component({
    selector: "ns-main",
    moduleId: module.id,
    templateUrl: "./main.component.html",
    styleUrls: ["./main.common.css", "./main.component.css"]
})
export class MainComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    public onTapLogin() {
        tnsOAuthModule.ensureValidToken()
            .then((token: string) => {
                console.log('Token: ' + token);
            })
            .catch((er) => {
                console.error('error logging in');
                console.dir(er);
            });
    }

    public onTapLogout() {
        tnsOAuthModule.logout()
            .then(() => console.log('logged out'))
            .catch((er) => {
                console.error('error logging out');
                console.dir(er);
            });
    }

    public authcallback() {
        console.log('yay callback');
}
}