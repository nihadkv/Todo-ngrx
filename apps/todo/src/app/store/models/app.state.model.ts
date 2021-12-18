import { TodoTask } from './todo-task.model';

export interface AppState {
  readonly todo: Array<TodoTask>;
}
