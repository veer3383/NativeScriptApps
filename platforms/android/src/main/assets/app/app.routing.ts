import {NgModule} from "@angular/core";
import {NativeScriptRouterModule} from "nativescript-angular/router";
import {Routes} from "@angular/router";

import {HeaderComponent} from "./components/header/header.component";

const routes: Routes = [
    {path: "", redirectTo: "/header",pathMatch: "full"},
    {path:"header",component: HeaderComponent}
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]

})
export class AppRoutingModule{}