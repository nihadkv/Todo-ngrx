import { TodoState } from '../reducers/todo.reducer';
import { TodoTask } from './todo-task.model';

export interface AppState {
  readonly todo: TodoState;
}
