import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemTodoService implements InMemoryDbService {
  createDb() {
      let todos= [];
      return {todos};
    }
}
