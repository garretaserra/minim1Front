import { Component, OnInit } from '@angular/core';
import {Subject} from './../models/Subject';
import {SubjectService} from "../services/subject.service";
import {Student} from "../models/Student";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef, MatSnackBar} from '@angular/material';
import {AddPlayerComponent} from '../add-player/add-player.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  subjects: Subject[];
  currentSubject: Subject;
  currentStudent: Student;

  constructor(private subjectService: SubjectService,
              public dialog: MatDialog) { }

  ngOnInit() {
    this.subjectService.getSubjects().subscribe(subjects=>{this.subjects = subjects});
  }

  public subjectSelect(subject){
    this.currentSubject = subject;
  }

  public studentSelect(student){
    this.currentStudent = student;
  }

  public addPlayer(){
    const dialogRef = this.dialog.open(AddPlayerComponent);
    dialogRef.updateSize('30%', '50%');
    dialogRef.afterClosed().subscribe(data=>{

    });
  }

}
