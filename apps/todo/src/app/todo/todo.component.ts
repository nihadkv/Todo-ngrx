import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  AddTodoAction,
  DeleteTodoAction,
  LoadTodoAction,
} from '../store/actions/todo.actions';
import { AppState } from '../store/models/app.state.model';
import { TodoTask } from '../store/models/todo-task.model';

@Component({
  selector: 'todo-ngrx-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  formGroup!: FormGroup;
  todoTask$!: Observable<Array<any>>;
  loading$!: Observable<boolean>;
  error$!: Observable<Error>;
  constructor(private fb: FormBuilder, private store: Store<AppState>) {}

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      id: [],
      task: [],
    });
    this.todoTask$ = this.store.select((store) => store.todo.list);
    this.loading$ = this.store.select((store) => store.todo.loading);
    this.error$ = this.store.select((store) => store.todo.error);

    // this.todoTask$ = this.store.select((store) => {
    //   return store.todo;
    // });
    this.store.dispatch(new LoadTodoAction());
    // this.store.subscribe(function () {
    //   localStorage.setItem('state', JSON.stringify(this.store.getState()));
    // });
    // this.store.subscribe((res) => {
    //   console.log(res);
    // });
  }

  addTodo() {
    // this.formGroup.value.id = this.id();
    this.store.dispatch(new AddTodoAction(this.formGroup.value.task));
    this.formGroup.reset();
    this.store.dispatch(new LoadTodoAction());
  }

  deleteTodo(id: any) {
    this.store.dispatch(new DeleteTodoAction(id));
  }

  // id() {
  //   return '_' + Math.random().toString(36).substr(2, 9);
  // }
}
