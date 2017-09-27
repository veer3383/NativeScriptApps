import { platformNativeScriptDynamic } from "nativescript-angular/platform";
import { AppModule } from "./app.module";
import * as tnsOAuthModule from 'nativescript-oauth';

platformNativeScriptDynamic().bootstrapModule(AppModule);
