import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {StudentService} from "../services/student.service";
import {SubjectService} from "../services/subject.service";
import {Student} from "../models/Student";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-new-subject',
  templateUrl: './new-subject.component.html',
  styleUrls: ['./new-subject.component.css']
})
export class NewSubjectComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<NewSubjectComponent>,
              private subjectService: SubjectService) { };

  form: FormControl = new FormControl();

  ngOnInit() {
  }

  async addSubject() {
    //Create the new subject
    await this.subjectService.addNewSubject(this.form.value).toPromise();
    await this.closeDialog()
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
