import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import {
  DxDrawerModule,
  DxListModule,
  DxToolbarModule
} from 'devextreme-angular';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    DxToolbarModule,
    DxDrawerModule,
    DxListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
