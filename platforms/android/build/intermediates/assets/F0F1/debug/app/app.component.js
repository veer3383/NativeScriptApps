"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var AppComponent = (function () {
    function AppComponent(page) {
        this.page = page;
        this.page.actionBarHidden = true;
        // registerElement("StatusBar", () => require("nativescript-statusbar").StatusBar);      
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            template: "\n    <!-- Your UI components go here -->\n    <StatusBar ios:barStyle=\"light\" android:barStyle=\"red\"></StatusBar>\n    <page-router-outlet></page-router-outlet>\n  ",
            styleUrls: ["./app.common.css"]
        }),
        __metadata("design:paramtypes", [page_1.Page])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsZ0NBQStCO0FBWS9CO0lBRUUsc0JBQW9CLElBQVU7UUFBVixTQUFJLEdBQUosSUFBSSxDQUFNO1FBQzFCLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztRQUNsQyx5RkFBeUY7SUFDNUYsQ0FBQztJQUVELCtCQUFRLEdBQVI7SUFDQSxDQUFDO0lBUlUsWUFBWTtRQVR4QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFFBQVE7WUFDbEIsUUFBUSxFQUFFLDJLQUlUO1lBQ0QsU0FBUyxFQUFFLENBQUMsa0JBQWtCLENBQUM7U0FDaEMsQ0FBQzt5Q0FHMEIsV0FBSTtPQUZuQixZQUFZLENBU3hCO0lBQUQsbUJBQUM7Q0FBQSxBQVRELElBU0M7QUFUWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xuaW1wb3J0IHtyZWdpc3RlckVsZW1lbnR9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9lbGVtZW50LXJlZ2lzdHJ5XCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJteS1hcHBcIixcbiAgdGVtcGxhdGU6IGBcbiAgICA8IS0tIFlvdXIgVUkgY29tcG9uZW50cyBnbyBoZXJlIC0tPlxuICAgIDxTdGF0dXNCYXIgaW9zOmJhclN0eWxlPVwibGlnaHRcIiBhbmRyb2lkOmJhclN0eWxlPVwicmVkXCI+PC9TdGF0dXNCYXI+XG4gICAgPHBhZ2Utcm91dGVyLW91dGxldD48L3BhZ2Utcm91dGVyLW91dGxldD5cbiAgYCxcbiAgc3R5bGVVcmxzOiBbXCIuL2FwcC5jb21tb24uY3NzXCJdXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHByaXZhdGUgaTogYW55O1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhZ2U6IFBhZ2UpIHtcbiAgICAgIHRoaXMucGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xuICAgICAvLyByZWdpc3RlckVsZW1lbnQoXCJTdGF0dXNCYXJcIiwgKCkgPT4gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1zdGF0dXNiYXJcIikuU3RhdHVzQmFyKTsgICAgICBcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG59Il19