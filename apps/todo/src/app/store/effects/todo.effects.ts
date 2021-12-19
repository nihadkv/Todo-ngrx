import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { TodoService } from '../../todo/todo.service';
import {
  AddTodoAction,
  AddTodoFailureAction,
  AddTodoSuccessAction,
  DeleteTodoAction,
  DeleteTodoFailureAction,
  DeleteTodoSuccessAction,
  LoadTodoAction,
  LoadTodoFailureAction,
  LoadTodoSuccessAction,
  TodoActionTypes,
} from '../actions/todo.actions';
@Injectable()
export class TodoEffects {
  constructor(private actions$: Actions, private todoService: TodoService) {}

  @Effect() loadTodo$ = this.actions$.pipe(
    ofType<LoadTodoAction>(TodoActionTypes.LOAD_ITEM),
    mergeMap(() =>
      this.todoService.getTodo().pipe(
        map((data: any) => new LoadTodoSuccessAction(data)),
        catchError((error) => of(new LoadTodoFailureAction(error)))
      )
    )
  );

  @Effect() addTodoItem$ = this.actions$.pipe(
    ofType<AddTodoAction>(TodoActionTypes.ADD_ITEM),
    mergeMap((data: any) =>
      this.todoService.addTodo(data.payload).pipe(
        map(() => new AddTodoSuccessAction(data.payload)),
        catchError((error) => of(new AddTodoFailureAction(error)))
      )
    )
  );

  @Effect() deleteShoppingItem$ = this.actions$.pipe(
    ofType<DeleteTodoAction>(TodoActionTypes.DELETE_ITEM),
    mergeMap((data) =>
      this.todoService.deleteTodo(data.payload).pipe(
        map(() => new DeleteTodoSuccessAction(data.payload)),
        catchError((error) => of(new DeleteTodoFailureAction(error)))
      )
    )
  );
}
