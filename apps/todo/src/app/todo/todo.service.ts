import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TodoTask } from '../store/models/todo-task.model';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private TODO_URL = 'http://localhost:3333/api/todo';
  constructor(private http: HttpClient) {}

  getTodo() {
    return this.http.get<TodoTask[]>(this.TODO_URL);
  }

  addTodo(todo: TodoTask) {
    console.log(todo);

    return this.http.post(this.TODO_URL, { todo });
  }

  deleteTodo(id: any) {
    return this.http.delete(`${this.TODO_URL}/${id}`);
  }
}
