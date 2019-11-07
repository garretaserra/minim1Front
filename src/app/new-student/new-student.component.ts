import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {MatDialogRef} from "@angular/material/dialog";
import {SubjectService} from "../services/subject.service";
import {StudentService} from "../services/student.service";

@Component({
  selector: 'app-new-student',
  templateUrl: './new-student.component.html',
  styleUrls: ['./new-student.component.css']
})
export class NewStudentComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<NewStudentComponent>,
              private studentService: StudentService,
              private fb: FormBuilder) { }

  items: FormArray;
  form: FormGroup = this.fb.group({
    name: '',
    address: '',
    phones: this.fb.array([this.createPhone()])
  });

  createPhone(): FormGroup{
    return this.fb.group({
      description: '',
      number: ''
    })
  }

  addPhone(){
    this.items = this.form.get('phones') as FormArray;
    this.items.push(this.createPhone());
  }

  ngOnInit() {
  }

  async addStudent() {
    //Create the new student
    
    await this.closeDialog()
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
