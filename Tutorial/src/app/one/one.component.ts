import { Component, OnInit } from '@angular/core';
import 'rxjs/Rx';
import { StuService } from '../stu.service';
import 'rxjs/add/operator/map';

import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css'],
  providers:[StuService]
})
export class OneComponent implements OnInit {

  constructor(private stuService:StuService) {

  }
  students;
  ngOnInit() {
    this.stuService.getStudent().subscribe(res=>this.students = res);
  }

}
