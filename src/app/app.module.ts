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
import { EnrollPlayerComponent } from './enroll-player/enroll-player.component';
import {MatCheckboxModule} from "@angular/material/checkbox";
import { NewStudentComponent } from './new-student/new-student.component';
import { NewSubjectComponent } from './new-subject/new-subject.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EnrollPlayerComponent,
    NewStudentComponent,
    NewSubjectComponent
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
    MatCheckboxModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatIconModule
  ],
  exports:[
    EnrollPlayerComponent,
    NewSubjectComponent,
    NewStudentComponent
  ],
  entryComponents:[
    EnrollPlayerComponent,
    NewSubjectComponent,
    NewStudentComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
