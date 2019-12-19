import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { WindowComponent } from './window/window.component';


@NgModule({
  declarations: [
    AppComponent,
    WindowComponent,
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCueqVixrEa5Fx0GmQM4feW5L3FUVtbvSU'
    }),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
