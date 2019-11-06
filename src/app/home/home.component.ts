import { Component, OnInit } from '@angular/core';
import {Subject} from './../models/Subject';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  subjects: Subject[];

  constructor() { }

  ngOnInit() {
  }

}
