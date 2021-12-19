import { Action } from '@ngrx/store';
import { TodoTask } from '../models/todo-task.model';
export enum TodoActionTypes {
  LOAD_ITEM = '[TODO] Load Todo',
  LOAD_ITEM_SUCCESS = '[TODO] Load Todo Success',
  LOAD_ITEM_FAILURE = '[TODO] Load Todo Failure',
  ADD_ITEM = '[TODO] Add Todo',
  ADD_ITEM_SUCCESS = '[TODO] Add Todo Success',
  ADD_ITEM_FAILURE = '[TODO] Add Todo Failure',
  DELETE_ITEM = '[TODO] Delete Todo',
  DELETE_ITEM_SUCESS = '[TODO] Delete Todo Sucess',
  DELETE_ITEM_FAILURE = '[TODO] Delete Todo Failure',
}
export class LoadTodoAction implements Action {
  readonly type = TodoActionTypes.LOAD_ITEM;
}

export class LoadTodoSuccessAction implements Action {
  readonly type = TodoActionTypes.LOAD_ITEM_SUCCESS;

  constructor(public payload: Array<TodoTask>) {}
}

export class LoadTodoFailureAction implements Action {
  readonly type = TodoActionTypes.LOAD_ITEM_FAILURE;

  constructor(public payload: Error) {}
}
export class AddTodoAction implements Action {
  readonly type = TodoActionTypes.ADD_ITEM;

  constructor(public payload: TodoTask) {}
}

export class AddTodoSuccessAction implements Action {
  readonly type = TodoActionTypes.ADD_ITEM_SUCCESS;

  constructor(public payload: TodoTask) {}
}

export class AddTodoFailureAction implements Action {
  readonly type = TodoActionTypes.ADD_ITEM_FAILURE;

  constructor(public payload: Error) {}
}

export class DeleteTodoAction implements Action {
  readonly type = TodoActionTypes.DELETE_ITEM;

  constructor(public payload: TodoTask) {}
}

export class DeleteTodoSuccessAction implements Action {
  readonly type = TodoActionTypes.DELETE_ITEM_SUCESS;

  constructor(public payload: TodoTask) {}
}

export class DeleteTodoFailureAction implements Action {
  readonly type = TodoActionTypes.DELETE_ITEM_FAILURE;

  constructor(public payload: Error) {}
}

// export type TodoAction = AddTodoAction;
