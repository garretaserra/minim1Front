import { Component, OnInit } from '@angular/core';
import {Subject} from './../models/Subject';
import {SubjectService} from "../services/subject.service";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  subjects: Subject[];

  constructor(private subjectService: SubjectService) { }

  ngOnInit() {
    this.subjectService.getSubjects().subscribe(subjects=>{this.subjects = subjects});
  }

}
