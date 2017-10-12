import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterializeModule } from 'angular2-materialize';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DownloadComponent } from './download/download.component';
import { ResourcesComponent } from './resources/resources.component';
import { FeedbackComponent } from './feedback/feedback.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {EmailService} from "./services/EmailService";

@NgModule({
  declarations: [
    AppComponent,
    DownloadComponent,
    ResourcesComponent,
    FeedbackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterializeModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [EmailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
