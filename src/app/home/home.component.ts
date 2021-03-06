import {Component, OnInit} from '@angular/core';
import {Subject} from './../models/Subject';
import {SubjectService} from "../services/subject.service";
import {Student} from "../models/Student";
import {MatDialog} from '@angular/material';
import {EnrollStudentComponent} from '../enroll-student/enroll-student.component';
import {NewStudentComponent} from "../new-student/new-student.component";
import {NewSubjectComponent} from "../new-subject/new-subject.component";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  subjects: Subject[];
  currentSubject: Subject;
  currentStudent: Student;
  degreeOptions: string[] = ['all', 'telecos', 'telematica', 'aeroespacial'];

  constructor(private subjectService: SubjectService,
              public dialog: MatDialog) { }

  ngOnInit() {
    this.updateInfo();
  }

  updateInfo(){
    /*
      This function will update the information that is shown on the web page
      it will be called every time that information on the database is changed
      so that the user doesn't have to refresh the page to view the change
     */
    this.subjectService.getSubjects().subscribe(subjects=>{
      this.subjects = subjects;
      //If current subject exists update the information as well
      if(this.currentSubject)
        this.currentSubject = subjects.find(s => s.name == this.currentSubject.name);
    });
  }

  //Save the selected subject
  public subjectSelect(subject){
    this.currentSubject = subject;
  }

  //Save the selected student
  public studentSelect(student){
    this.currentStudent = student;
  }

  //Opens Dialog
  public enrollStudent(){
    const dialogRef = this.dialog.open(EnrollStudentComponent,{
      width: '50%',
      height: '70%',
      data:{
        subject: this.currentSubject
      }
    });
    //When Dialog Closes
    dialogRef.afterClosed().subscribe((data: Student[])=>{
      //Data will be the array of students that have to be enrolled in the subject (can be empty)
      if(data) {
        data.forEach(async(student) => {
          await this.subjectService.enrollStudent(this.currentSubject.name, student.name).toPromise();
          this.updateInfo();
        })
      }
    });
    };

  public addStudent(){
    const dialogRef = this.dialog.open(NewStudentComponent,{
      width: '80%',
      height: '80%',
    });
    dialogRef.afterClosed().subscribe(()=>{this.updateInfo()});
  }

  public addSubject() {
    const dialogRef = this.dialog.open(NewSubjectComponent, {
      width: '50%',
      height: '40%',
    });
    dialogRef.afterClosed().subscribe(() => {this.updateInfo()})
  }

  async deleteSubject(subjectName){
    if(confirm('Are you sure you want to delete '+subjectName)) {
      await this.subjectService.deleteSubject(subjectName).toPromise();
      this.updateInfo();
    }
  }

  async dropSubject(subjectName, studentName){
    await this.subjectService.dropSubject(subjectName, studentName).toPromise();
    this.updateInfo();
  }

  async onSelectChange(event){
    if(event.isUserInput) {
      if(event.source.value==="all") {
        this.updateInfo();
      }
      else {
        this.subjects = await this.subjectService.getSubjectsByDegree(event.source.value).toPromise();
      }
    }
  }
}
