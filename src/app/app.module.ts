import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListingComponent } from './components/listing/listing.component';
import { VideoComponent } from './components/video/video.component';
import { NaviComponent } from './components/navi/navi.component';
import { MyplaylistscreenComponent } from './components/myplaylistscreen/myplaylistscreen.component';
import { HomescreenComponent } from './components/homescreen/homescreen.component';

@NgModule({
  declarations: [
    AppComponent,
    ListingComponent,
    VideoComponent,
    NaviComponent,
    MyplaylistscreenComponent,
    HomescreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
