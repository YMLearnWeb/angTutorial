import { Component, OnInit } from '@angular/core';
import { StuService } from '../stu.service';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css'],
  providers:[StuService]
})
export class OneComponent implements OnInit {

  constructor(private stuService:StuService) { }

  ngOnInit() {
    this.getStudent();
  }

  students;
  title = 'Guid Task'
  getStudent(){
    this.stuService.getStudent().then(res =>this.students = res)
  }
}
