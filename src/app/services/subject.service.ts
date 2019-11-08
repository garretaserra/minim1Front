import { Injectable } from '@angular/core';
import {Url} from './url';
import { HttpClient } from '@angular/common/http';
import {Subject} from "../models/Subject";
import {Observable} from "rxjs";
import {Student} from "../models/Student";

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  url: string;

  constructor(private http: HttpClient) {
    this.url = new Url().url;
  }

  getSubjects(): Observable<Subject[]>{
    return this.http.get<Subject[]>(this.url+'/subject/get');
  }

  enrollStudent(subjectName, studentName){
    return this.http.post(this.url+'/subject/addNew',{subject:{name: subjectName},student:{name: studentName}});
  }

  addNewSubject(subjectName, degree){
    return this.http.post(this.url+'/subject/add', {subject: {name: subjectName, degree: degree, students: []}});
  }

  deleteSubject(subjectName){
    return this.http.get(this.url+'/subject/delete/'+subjectName);
  }

  dropSubject(subjectName, studentName){
    return this.http.get(this.url+'/subject/dropSubject?subject='+subjectName+'&student='+studentName);
  }

  getStudentsNotEnrolled(subjectName): Observable<Student[]>{
    return this.http.get<Student[]>(this.url+'/subject/studentsNotEnrolled?subject='+subjectName);
  }

  getSubjectsByDegree(degreeName): Observable<Subject[]>{
    return this.http.get<Subject[]>(this.url+'/subject/getByDegree?degree='+degreeName);
  }
}
