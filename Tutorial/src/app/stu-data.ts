import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemStudentService implements InMemoryDbService {
  createDb() {
      let students = [
        {id:1,name:'Will', score:'80'},
        {id:2,name:'Grace',score:'81'},
        {id:3,name:'Jack', score:'60'},
        {id:4,name: 'Karen', score:'10'}
      ];
      return {students};
    }
}
