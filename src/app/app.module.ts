import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxGoogleAnalyticsModule } from 'ngx-google-analytics';
import { GenralModule } from './components/genral/genral.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HomeModule } from './components/home/home.module';
export const environment = {
  production: true,
  trackAnalyticID: "G-4ML1VNCP9T"
};



@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    GenralModule,
    HomeModule,
    HttpClientModule,
    BrowserModule,
    NgxGoogleAnalyticsModule.forRoot(environment.trackAnalyticID),  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
