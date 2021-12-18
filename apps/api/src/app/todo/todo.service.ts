import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TodoEntity } from './entities/todo.entity';
import { TodoModel } from './model/todo.model';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(TodoEntity)
    private readonly todoRepository: Repository<TodoEntity>
  ) {}
  createTodo(todo: TodoModel) {
    return this.todoRepository.save(todo);
  }

  getTodo() {
    return this.todoRepository.find();
  }

  updateTodo(id: number, body: TodoModel) {
    return this.todoRepository.update(id, body);
  }

  deleteTodo(id: number) {
    return this.todoRepository.delete(id);
  }
}
