import { Injectable } from '@angular/core';
import {Url} from './url';
import { HttpClient } from '@angular/common/http';
import {Subject} from "../models/Subject";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  url: Url;

  constructor(private http: HttpClient) {
    this.url = new Url();
  }

  getSubjects(): Observable<Subject[]>{
    return this.http.get<Subject[]>(this.url.url+'/subject/get');
  }

  enrollStudent(subjectName, studentName){
    return this.http.post(this.url.url+'/subject/addNew',{subject:{name: subjectName},student:{name: studentName}});
  }

  addNewSubject(subjectName){
    return this.http.post(this.url.url+'/subject/add', {subject: {name: subjectName, students: []}});
  }
}
