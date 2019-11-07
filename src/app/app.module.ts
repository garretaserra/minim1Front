import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from "@angular/material/card";
import {MatListModule} from "@angular/material/list";
import {MatDialogModule} from "@angular/material/dialog";
import {HomeComponent } from './home/home.component';
import {HttpClientModule} from "@angular/common/http";
import {MatButtonModule} from "@angular/material/button";
import { AddPlayerComponent } from './add-player/add-player.component';
import {MatCheckboxModule} from "@angular/material/checkbox";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddPlayerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatListModule,
    MatDialogModule,
    HttpClientModule,
    MatButtonModule,
    MatCheckboxModule
  ],
  exports:[
    AddPlayerComponent
  ],
  entryComponents:[
    AddPlayerComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
