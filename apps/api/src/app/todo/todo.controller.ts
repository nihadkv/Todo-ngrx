import {
  Controller,
  Post,
  Body,
  Get,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoModel } from './model/todo.model';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Post()
  create(@Body() body: TodoModel) {
    return this.todoService.createTodo(body);
  }

  @Get()
  getTodo() {
    return this.todoService.getTodo();
  }

  @Put(':id')
  updateTodo(@Param() id: number, @Body() body: TodoModel) {
    return this.todoService.updateTodo(id, body);
  }

  @Delete(':id')
  deleteTodo(@Param() id: number) {
    return this.todoService.deleteTodo(id);
  }
}
