import { Component, OnInit } from '@angular/core';
import {Subject} from './../models/Subject';
import {SubjectService} from "../services/subject.service";
import {Student} from "../models/Student";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  subjects: Subject[];
  currentSubject: Subject;
  currentStudent: Student;

  constructor(private subjectService: SubjectService) { }

  ngOnInit() {
    this.subjectService.getSubjects().subscribe(subjects=>{this.subjects = subjects});
  }

  public subjectSelect(subject){
    this.currentSubject = subject;
  }

  public studentSelect(student){
    this.currentStudent = student;
  }

}
