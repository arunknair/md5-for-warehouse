import {AgmCoreModule} from '@agm/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {AppRoutes} from './app.routes.service';

import {ViewsModule} from './views/views.module';
import {SharedModule} from './shared/shared.module';
import {ErrorModule} from './views/errors/error.module';

// main layout
import {NavigationModule} from './main-layout/navigation/navigation.module';
import {LoginModule} from './shared/components/login/login.module';
import {LoggerService} from './common/LoggerService/logger.service';
import {MainPageModule} from './main-page/main-page.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        AgmCoreModule.forRoot({
            apiKey: ''
        }),
        BrowserModule,
        BrowserAnimationsModule,
        NavigationModule,
        AppRoutes,
        RouterModule,
        FormsModule,
        SharedModule,
        ViewsModule,
        ErrorModule,
        FormsModule,
        ReactiveFormsModule,
        LoginModule,
        MainPageModule
    ],
    providers: [
        LoggerService
    ],
    bootstrap: [AppComponent],
    schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
}
