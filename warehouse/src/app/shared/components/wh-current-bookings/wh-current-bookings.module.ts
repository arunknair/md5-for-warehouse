import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WhCurrentBookingsComponent} from './wh-current-bookings.component';
import {ViewsModule} from '../../../views/views.module';
import {AgmCoreModule} from '@agm/core';
import {SharedModule} from '../../shared.module';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CalendarModule} from 'angular-calendar';

@NgModule({
    declarations: [
        WhCurrentBookingsComponent
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        WhCurrentBookingsComponent
    ]
})
export class WhCurrentBookingsModule {
}
