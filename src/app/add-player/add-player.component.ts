import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {StudentService} from "../services/student.service";
import {Student} from "../models/Student";

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {

  students: Student[];
  checked: boolean[];

  constructor(public dialogRef: MatDialogRef<AddPlayerComponent>,
              private studentService: StudentService) { }

  ngOnInit() {
    //Get all students on the database
    this.studentService.getStudents().subscribe(students =>{
      this.students=students;
      //Initialize the array of booleans bounded to the corresponding checkboxes
      this.checked = [].fill(false, 0, this.students.length);
    });
  }

  closeDialog(){
    //If operation is canceled the dialog closes without returning any students
    this.dialogRef.close()
  }

  addStudents(){
    let newStudents: Student[];
    //Add students to array only if their checkbox is checked
    this.students.forEach((student, i)=>{if(this.checked[i])newStudents.push(student)});
    //Return an array of all the students with their checkbox checked
    this.dialogRef.close(newStudents);
  }
}
