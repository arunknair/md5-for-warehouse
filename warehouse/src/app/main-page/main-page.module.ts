import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page.component';
import {NavigationModule} from '../main-layout/navigation/navigation.module';
import {RouterModule} from '@angular/router';
import {ViewsModule} from '../views/views.module';

@NgModule({
  declarations: [MainPageComponent],
  imports: [
    CommonModule,
      NavigationModule,
      RouterModule,
      ViewsModule
  ]
})
export class MainPageModule { }
