import { Component, OnInit, Input } from '@angular/core';
import { StuService } from '../stu.service';
import { Observable } from 'rxjs/Observable';
import { Student } from '../student';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css'],
  providers: [StuService]
})

export class TwoComponent implements OnInit {

  constructor(private stuService:StuService) { }

  ngOnInit() {
    this.getStudent();
  }
  students:{}[];
  displayStyle = "none";
  perStudent : Student;
  //add
  addStudent(name,score){
    let stu = {
      "name":name,
      "score":score
    };
    this.stuService
      .addStudent(stu)
      .subscribe(res=>this.students.push(res.json()));
  };
  //get
  getStudent(){
    this.stuService
        .getStudent()
        .subscribe(res =>this.students = res.json())
  }

  //del
  delStudent(student){
    this.stuService
        .delStudent(student.id)
        .subscribe(res=>this.students = this.students.filter(i =>i!==student));
  }

  //modify
  modifyStudent(student){
    this.displayStyle = "block";
    this.perStudent = student;
  }
  updateStudent(name,score){
    this.perStudent.name = name;
    this.perStudent.score = score;
    console.log(this.perStudent);
    this.stuService
        .updateStudent(this.perStudent)
        .subscribe(function(res){console.log(res)})
  }
  //test
  anotherStus;
  getAnotherStudent(){
    this.stuService
        .getStudent()
        .subscribe(res =>this.anotherStus = res.json())
  }
}
