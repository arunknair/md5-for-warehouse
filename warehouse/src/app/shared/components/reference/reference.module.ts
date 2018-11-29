import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReferenceComponent } from './reference.component';
import {ViewsModule} from '../../../views/views.module';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SharedModule} from '../../shared.module';
import {AgmCoreModule} from '@agm/core';
import {CalendarModule} from 'angular-calendar';

@NgModule({
  declarations: [
      ReferenceComponent
  ],
  imports: [
    CommonModule,
      ViewsModule,
      CommonModule,
      RouterModule,
      FormsModule,
      BrowserModule,
      BrowserAnimationsModule,
      SharedModule,
      AgmCoreModule.forRoot({
          // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en#key
          apiKey: ''
      }),
      CalendarModule.forRoot()
  ],
    exports: [
        ReferenceComponent
    ]
})
export class ReferenceModule { }
