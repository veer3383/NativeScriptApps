"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var tnsOAuthModule = require("nativescript-oauth");
var MainComponent = (function () {
    function MainComponent() {
    }
    MainComponent.prototype.ngOnInit = function () {
    };
    MainComponent.prototype.onTapLogin = function () {
        tnsOAuthModule.ensureValidToken()
            .then(function (token) {
            console.log('Token: ' + token);
        })
            .catch(function (er) {
            console.error('error logging in');
            console.dir(er);
        });
    };
    MainComponent.prototype.onTapLogout = function () {
        tnsOAuthModule.logout()
            .then(function () { return console.log('logged out'); })
            .catch(function (er) {
            console.error('error logging out');
            console.dir(er);
        });
    };
    MainComponent.prototype.authcallback = function () {
        console.log('yay callback');
    };
    MainComponent = __decorate([
        core_1.Component({
            selector: "ns-main",
            moduleId: module.id,
            templateUrl: "./main.component.html",
            styleUrls: ["./main.common.css", "./main.component.css"]
        }),
        __metadata("design:paramtypes", [])
    ], MainComponent);
    return MainComponent;
}());
exports.MainComponent = MainComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtYWluLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUErRTtBQUMvRSxtREFBcUQ7QUFVckQ7SUFFSTtJQUFnQixDQUFDO0lBRWpCLGdDQUFRLEdBQVI7SUFDQSxDQUFDO0lBRU0sa0NBQVUsR0FBakI7UUFDSSxjQUFjLENBQUMsZ0JBQWdCLEVBQUU7YUFDNUIsSUFBSSxDQUFDLFVBQUMsS0FBYTtZQUNoQixPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsQ0FBQztRQUNuQyxDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsVUFBQyxFQUFFO1lBQ04sT0FBTyxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1lBQ2xDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDcEIsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBRU0sbUNBQVcsR0FBbEI7UUFDSSxjQUFjLENBQUMsTUFBTSxFQUFFO2FBQ2xCLElBQUksQ0FBQyxjQUFNLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsRUFBekIsQ0FBeUIsQ0FBQzthQUNyQyxLQUFLLENBQUMsVUFBQyxFQUFFO1lBQ04sT0FBTyxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1lBQ25DLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDcEIsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBRU0sb0NBQVksR0FBbkI7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUE3QlksYUFBYTtRQU56QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFNBQVM7WUFDbkIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx1QkFBdUI7WUFDcEMsU0FBUyxFQUFFLENBQUMsbUJBQW1CLEVBQUUsc0JBQXNCLENBQUM7U0FDM0QsQ0FBQzs7T0FDVyxhQUFhLENBOEJ6QjtJQUFELG9CQUFDO0NBQUEsQUE5QkQsSUE4QkM7QUE5Qlksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCAqIGFzIHRuc09BdXRoTW9kdWxlIGZyb20gJ25hdGl2ZXNjcmlwdC1vYXV0aCc7XG5pbXBvcnQgKiBhcyBkaWFsb2dzIGZyb20gJ3VpL2RpYWxvZ3MnO1xuXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIm5zLW1haW5cIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vbWFpbi5jb21wb25lbnQuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogW1wiLi9tYWluLmNvbW1vbi5jc3NcIiwgXCIuL21haW4uY29tcG9uZW50LmNzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBNYWluQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25UYXBMb2dpbigpIHtcbiAgICAgICAgdG5zT0F1dGhNb2R1bGUuZW5zdXJlVmFsaWRUb2tlbigpXG4gICAgICAgICAgICAudGhlbigodG9rZW46IHN0cmluZykgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdUb2tlbjogJyArIHRva2VuKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKGVyKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignZXJyb3IgbG9nZ2luZyBpbicpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZGlyKGVyKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBvblRhcExvZ291dCgpIHtcbiAgICAgICAgdG5zT0F1dGhNb2R1bGUubG9nb3V0KClcbiAgICAgICAgICAgIC50aGVuKCgpID0+IGNvbnNvbGUubG9nKCdsb2dnZWQgb3V0JykpXG4gICAgICAgICAgICAuY2F0Y2goKGVyKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignZXJyb3IgbG9nZ2luZyBvdXQnKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmRpcihlcik7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXV0aGNhbGxiYWNrKCkge1xuICAgICAgICBjb25zb2xlLmxvZygneWF5IGNhbGxiYWNrJyk7XG59XG59Il19