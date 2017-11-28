import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { HttpInMemoryWebApiModule } from 'angular-in-memory-web-api';
import 'rxjs/add/operator/map';

import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError,map,tap} from 'rxjs/operators';
import { InMemStudentService } from './stu-data';

@Injectable()
export class StuService{
  private api_url = "api/students";
  private headers = new Headers({'Content-Type':'application/json'});

  constructor(private http: Http){

  };

  private handleError(error):void{
    console.log('An error occurred' + error);
  }
  //get
  getStudent():Observable<any>{
     return this.http
         .get(this.api_url)
         // .map(res => res.json())
         .catch(err => {
           this.handleError(err);
           return err;
         })
  }
  //post
  addStudent(stu):Observable<any>{
    return this.http
               .post(this.api_url, JSON.stringify(stu),{headers:this.headers})
               .catch(err => {
                 this.handleError(err);
                 return err;
               })
  }
  //del
  delStudent(id):Observable<any>{
    const url = this.api_url + '/'+id;
    return this.http
                .delete(url,{headers:this.headers})
                .catch(err => {
                  this.handleError(err);
                  return err;
                })
  }

  //put
  updateStudent(student):Observable<any>{
    const url = this.api_url + '/'+student.id;
    return this.http
               .put(url,JSON.stringify(student),{headers:this.headers})
               .pipe(tap(_=>console.log("updated id" + student.id)))
               .catch(err => {
                 this.handleError(err);
                 return err;
               })
  }
}
