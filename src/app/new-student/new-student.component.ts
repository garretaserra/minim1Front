import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
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
    name: ['', Validators.compose(
      [Validators.required,
      Validators.minLength(3),
      Validators.pattern('[a-zA-Z]+')])],
    address: ['', Validators.compose([Validators.required])],
    phones: this.fb.array([this.createPhone()])
  });

  validationMessages: any = {
    name:[
      {type: 'required', message:'Name is required'},
      {type: 'minlength', message:'Name must be longer than 2 characters'},
      {type: 'pattern', message:'The name must only be characters'}
    ]
  };

  createPhone(): FormGroup{
    return this.fb.group({
      description: ['', Validators.compose([Validators.required])],
      number: ['', Validators.compose([Validators.required])],
    })
  }

  addPhone(){
    this.items = this.form.get('phones') as FormArray;
    this.items.push(this.createPhone());
  }

  ngOnInit() {
  }

  async addStudent() {
    if(this.form.valid) {
      //Create the new student
      await this.studentService.addNewStudent(this.form.value).toPromise();
      await this.closeDialog()
    }
    else{
      console.log('Validation Failed');
    }
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
