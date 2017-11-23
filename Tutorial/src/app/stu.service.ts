import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { HttpInMemoryWebApiModule } from 'angular-in-memory-web-api';

import 'rxjs/add/operator/toPromise';
import { InMemStudentService } from './stu-data';

@Injectable()
export class StuService{
  private api_url = "api/students";
  private headers = new Headers({'Content-Type':'application/json'});

  constructor(private http: Http){};

  private handleError(error:any):Promise<any>{
    console.error('An error occurred',error);
    return Promise.reject(error.message || error);
  }

  //get
  getStudent():Promise<any>{
    return this.http
               .get(this.api_url)
               .toPromise()
               .then(res =>res.json())
               .catch(this.handleError);
  }
}
