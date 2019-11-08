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
  degreeOptions: string[] = ['telecos', 'telematica', 'aeroespacial'];
  option: string;

  ngOnInit() {
  }

  async addSubject() {
    console.log(this.form);
    //Create the new subject
    await this.subjectService.addNewSubject(this.form.value, this.option).toPromise();
    await this.closeDialog()
  }

  closeDialog() {
    this.dialogRef.close();
  }

  setSelection(event){
    if(event.isUserInput) {
      this.option = event.source.value;
    }
  }
}
