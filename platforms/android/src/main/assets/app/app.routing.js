"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var header_component_1 = require("./components/header/header.component");
var routes = [
    { path: "", redirectTo: "/header", pathMatch: "full" },
    { path: "header", component: header_component_1.HeaderComponent }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forRoot(routes)],
            exports: [router_1.NativeScriptRouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnJvdXRpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAucm91dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF1QztBQUN2QyxzREFBcUU7QUFHckUseUVBQXFFO0FBRXJFLElBQU0sTUFBTSxHQUFXO0lBQ25CLEVBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFDLFNBQVMsRUFBRSxNQUFNLEVBQUM7SUFDbkQsRUFBQyxJQUFJLEVBQUMsUUFBUSxFQUFDLFNBQVMsRUFBRSxrQ0FBZSxFQUFDO0NBQzdDLENBQUM7QUFPRjtJQUFBO0lBQThCLENBQUM7SUFBbEIsZ0JBQWdCO1FBTDVCLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRSxDQUFDLGlDQUF3QixDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNuRCxPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsQ0FBQztTQUV0QyxDQUFDO09BQ1csZ0JBQWdCLENBQUU7SUFBRCx1QkFBQztDQUFBLEFBQS9CLElBQStCO0FBQWxCLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmdNb2R1bGV9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZX0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHtSb3V0ZXN9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcblxuaW1wb3J0IHtIZWFkZXJDb21wb25lbnR9IGZyb20gXCIuL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnRcIjtcblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4gICAge3BhdGg6IFwiXCIsIHJlZGlyZWN0VG86IFwiL2hlYWRlclwiLHBhdGhNYXRjaDogXCJmdWxsXCJ9LFxuICAgIHtwYXRoOlwiaGVhZGVyXCIsY29tcG9uZW50OiBIZWFkZXJDb21wb25lbnR9XG5dO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yUm9vdChyb3V0ZXMpXSxcbiAgICBleHBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlXVxuXG59KVxuZXhwb3J0IGNsYXNzIEFwcFJvdXRpbmdNb2R1bGV7fSJdfQ==