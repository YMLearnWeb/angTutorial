import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { HttpInMemoryWebApiModule } from 'angular-in-memory-web-api';
import 'rxjs/add/operator/map';

import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError,map,tap} from 'rxjs/operators';
import { InMemTodoService } from './todo-data';

@Injectable()
export class TodoService{
  private api_url ="api/todos";
  private header = new Headers({'Content-Type':'application/json'});
  constructor(private http:Http){};

  private handleError(error):void{
    console.log('An eror occurred' + error);
  }

  //get
  getTodos():Promise<any>{
    return this.http
               .get(this.api_url)
               .toPromise()
               .then(res =>res.json())
               .catch(error => this.handleError(error));
  }

  //delete
  deleteTodos(todo): Promise<any>{
    const url = this.api_url + '/' + todo.id;
    return this.http
               .delete(url,this.header)
               .toPromise()
               .then(res =>res)
               .catch(error => this.handleError(error));
  }

  //post
  addTodos(todo):Promise<any>{
    return this.http
               .post(this.api_url,JSON.stringify(todo),this.header)
               .toPromise()
               .then(res=>res.json())
               .catch(error => this.handleError(error));
  }

  //put
  updateTodo(todo):Promise<any>{
    const url = this.api_url + '/' +todo.id;
    return this.http
               .put(url,JSON.stringify(todo),this.header)
               .toPromise()
               .then(res =>res.json)
              .catch(error => this.handleError(error));
  }
}
