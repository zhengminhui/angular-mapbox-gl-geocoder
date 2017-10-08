import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MapboxModule } from './mapbox/mapbox.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, MapboxModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
