import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { BannerComponent } from './banner/banner.component';
import { HomeComponent } from './home.component';
import { NgbModule, NgbNav, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { ContactComponent } from './contact/contact.component';
import { JobsComponent } from './jobs/jobs.component';
import { ProyectsComponent } from './proyects/proyects.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { BrowserModule } from '@angular/platform-browser';
import {CarouselModule} from "ngx-owl-carousel-o"








@NgModule({
  declarations: [
    AboutComponent,
    BannerComponent,
    HomeComponent,
    ContactComponent,
    JobsComponent,
    ProyectsComponent
  ],
  imports: [
    CommonModule,
    NgbNavModule,
    BrowserAnimationsModule,
    HttpClientModule,
    BrowserModule,
    CarouselModule
    
   
  ],
  exports:[HomeComponent]
})
export class HomeModule { }
