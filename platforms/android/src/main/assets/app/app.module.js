"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var app_routing_1 = require("./app.routing");
var app_component_1 = require("./app.component");
var header_component_1 = require("./components/header/header.component");
var home_component_1 = require("./components/header/home/home.component");
var booking_component_1 = require("./components/header/booking/booking.component");
var cancelled_component_1 = require("./components/header/booking/cancelled/cancelled.component");
var completed_component_1 = require("./components/header/booking/completed/completed.component");
var upcoming_component_1 = require("./components/header/booking/upcoming/upcoming.component");
var main_component_1 = require("./components/header/main/main.component");
var angular_1 = require("nativescript-grid-view/angular");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                header_component_1.HeaderComponent,
                home_component_1.HomeComponent,
                booking_component_1.BookingComponent,
                cancelled_component_1.CancelledComponent,
                completed_component_1.CompletedComponent,
                upcoming_component_1.UpcomingComponent,
                main_component_1.MainComponent
            ],
            bootstrap: [
                app_component_1.AppComponent
            ],
            imports: [
                nativescript_module_1.NativeScriptModule,
                app_routing_1.AppRoutingModule,
                angular_1.GridViewModule
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ],
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0QsZ0ZBQThFO0FBQzlFLDZDQUFpRDtBQUNqRCxpREFBK0M7QUFDL0MseUVBQXVFO0FBQ3ZFLDBFQUF3RTtBQUN4RSxtRkFBaUY7QUFDakYsaUdBQStGO0FBQy9GLGlHQUErRjtBQUMvRiw4RkFBNEY7QUFDNUYsMEVBQXdFO0FBQ3hFLDBEQUFnRTtBQXNCaEU7SUFBQTtJQUF5QixDQUFDO0lBQWIsU0FBUztRQXBCckIsZUFBUSxDQUFDO1lBQ1IsWUFBWSxFQUFFO2dCQUNaLDRCQUFZO2dCQUNaLGtDQUFlO2dCQUNmLDhCQUFhO2dCQUNiLG9DQUFnQjtnQkFDaEIsd0NBQWtCO2dCQUNsQix3Q0FBa0I7Z0JBQ2xCLHNDQUFpQjtnQkFDakIsOEJBQWE7YUFDZDtZQUNELFNBQVMsRUFBRTtnQkFDVCw0QkFBWTthQUFDO1lBQ2YsT0FBTyxFQUFFO2dCQUNQLHdDQUFrQjtnQkFDbEIsOEJBQWdCO2dCQUNoQix3QkFBYzthQUFDO1lBQ2pCLE9BQU8sRUFBRTtnQkFDUCx1QkFBZ0I7YUFBQztTQUNwQixDQUFDO09BQ1csU0FBUyxDQUFJO0lBQUQsZ0JBQUM7Q0FBQSxBQUExQixJQUEwQjtBQUFiLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIjtcbmltcG9ydCB7IEFwcFJvdXRpbmdNb2R1bGUgfSBmcm9tICcuL2FwcC5yb3V0aW5nJztcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcbmltcG9ydCB7IEhlYWRlckNvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnRcIjtcbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRzL2hlYWRlci9ob21lL2hvbWUuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBCb29raW5nQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy9oZWFkZXIvYm9va2luZy9ib29raW5nLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQ2FuY2VsbGVkQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy9oZWFkZXIvYm9va2luZy9jYW5jZWxsZWQvY2FuY2VsbGVkLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQ29tcGxldGVkQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy9oZWFkZXIvYm9va2luZy9jb21wbGV0ZWQvY29tcGxldGVkLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgVXBjb21pbmdDb21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRzL2hlYWRlci9ib29raW5nL3VwY29taW5nL3VwY29taW5nLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgTWFpbkNvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudHMvaGVhZGVyL21haW4vbWFpbi5jb21wb25lbnRcIjtcbmltcG9ydCB7IEdyaWRWaWV3TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1ncmlkLXZpZXcvYW5ndWxhclwiO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBBcHBDb21wb25lbnQsXG4gICAgSGVhZGVyQ29tcG9uZW50LFxuICAgIEhvbWVDb21wb25lbnQsXG4gICAgQm9va2luZ0NvbXBvbmVudCxcbiAgICBDYW5jZWxsZWRDb21wb25lbnQsXG4gICAgQ29tcGxldGVkQ29tcG9uZW50LFxuICAgIFVwY29taW5nQ29tcG9uZW50LFxuICAgIE1haW5Db21wb25lbnRcbiAgXSxcbiAgYm9vdHN0cmFwOiBbXG4gICAgQXBwQ29tcG9uZW50XSxcbiAgaW1wb3J0czogW1xuICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcbiAgICBBcHBSb3V0aW5nTW9kdWxlLFxuICAgIEdyaWRWaWV3TW9kdWxlXSxcbiAgc2NoZW1hczogW1xuICAgIE5PX0VSUk9SU19TQ0hFTUFdLFxufSlcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUgeyB9XG4iXX0=