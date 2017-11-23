import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemStudentService implements InMemoryDbService {
  createDb() {
      let students = [
        {name:'Will', score:'80'},
        {name:'Grace',score:'81'},
        {name:'Jack', score:'60'},
        {name: 'Karen', score:'10'}
      ];
      return {students};
    }
}
