import { Injectable } from '@angular/core';
import {Url} from "./url";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Student} from "../models/Student";

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  url: Url;

  constructor(private http: HttpClient) {
    this.url = new Url();
  }

  getStudents(): Observable<Student[]>{
    return this.http.get<Student[]>(this.url.url+'/student/get');
  }

  addNewStudent(student: Student){
    return this.http.post(this.url.url+'/student/add', {student});
  }
}
