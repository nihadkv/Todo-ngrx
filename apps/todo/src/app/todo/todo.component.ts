import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AddTodoAction, DeleteTodoAction } from '../store/actions/todo.actions';
import { AppState } from '../store/models/app.state.model';
import { TodoTask } from '../store/models/todo-task.model';

@Component({
  selector: 'todo-ngrx-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  formGroup!: FormGroup;
  todoTask$!: Observable<Array<TodoTask>>;
  constructor(private fb: FormBuilder, private store: Store<AppState>) {}

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      id: [],
      task: [],
    });
    this.todoTask$ = this.store.select((store) => store.todo);

    this.todoTask$ = this.store.select((store) => {
      return store.todo;
    });
  }

  addTodo() {
    this.formGroup.value.id = this.id();
    this.store.dispatch(new AddTodoAction(this.formGroup.value));
    this.formGroup.reset();
  }

  deleteTodo(id: any) {
    this.store.dispatch(new DeleteTodoAction(id));
  }

  id() {
    return '_' + Math.random().toString(36).substr(2, 9);
  }
}
