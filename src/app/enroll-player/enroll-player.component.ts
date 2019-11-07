import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {StudentService} from "../services/student.service";
import {Student} from "../models/Student";

@Component({
  selector: 'app-add-player',
  templateUrl: './enroll-player.component.html',
  styleUrls: ['./enroll-player.component.css']
})
export class EnrollPlayerComponent implements OnInit {

  //Array with all the students stored
  students: Student[];
  //Array of booleans that will define if the checkbox for each student is checked
  checked: boolean[] = [];

  constructor(public dialogRef: MatDialogRef<EnrollPlayerComponent>,
              private studentService: StudentService) { }

  ngOnInit() {
    //Get all students on the database
    this.studentService.getStudents().subscribe(students =>{
      this.students=students;
      //Initialize the array of booleans bounded to the corresponding checkboxes
      this.students.forEach((student, i)=>{
        this.checked[i] = false;
      });
    });
  }

  closeDialog(){
    //If operation is canceled the dialog closes without returning any students
    this.dialogRef.close()
  }

  addStudents(){
    let newStudents: Student[] = [];
    //Add students to array only if their checkbox is checked
    this.students.forEach((student, i)=>{if(this.checked[i])newStudents.push(student)});

    //Return an array of all the students with their checkbox checked
    this.dialogRef.close(newStudents);
  }
}
