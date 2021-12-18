import { Action } from '@ngrx/store';
import { TodoTask } from '../models/todo-task.model';
export enum TodoActionTypes {
  ADD_ITEM = '[TODO] Add Todo',
  DELETE_ITEM = '[TODO] Delete Todo',
}

export class AddTodoAction implements Action {
  readonly type = TodoActionTypes.ADD_ITEM;

  constructor(public payload: TodoTask) {}
}

export class DeleteTodoAction implements Action {
  readonly type = TodoActionTypes.DELETE_ITEM;

  constructor(public payload: TodoTask) {}
}

// export type TodoAction = AddTodoAction;
