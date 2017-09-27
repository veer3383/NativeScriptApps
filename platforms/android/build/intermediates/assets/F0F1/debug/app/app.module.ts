import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { AppRoutingModule } from './app.routing';
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { HomeComponent } from "./components/header/home/home.component";
import { BookingComponent } from "./components/header/booking/booking.component";
import { CancelledComponent } from "./components/header/booking/cancelled/cancelled.component";
import { CompletedComponent } from "./components/header/booking/completed/completed.component";
import { UpcomingComponent } from "./components/header/booking/upcoming/upcoming.component";
import { MainComponent } from "./components/header/main/main.component";
import { GridViewModule } from "nativescript-grid-view/angular";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    BookingComponent,
    CancelledComponent,
    CompletedComponent,
    UpcomingComponent,
    MainComponent
  ],
  bootstrap: [
    AppComponent],
  imports: [
    NativeScriptModule,
    AppRoutingModule,
    GridViewModule],
  schemas: [
    NO_ERRORS_SCHEMA],
})
export class AppModule { }
