import { TodoActionTypes } from '../actions/todo.actions';
import { TodoTask } from '../models/todo-task.model';

const initialState: Array<TodoTask> = [
  {
    id: 'abc123',
    task: 'wedding',
  },
];

export function TodoReducer(
  state: Array<TodoTask> = initialState,
  action: any
) {
  switch (action.type) {
    case TodoActionTypes.ADD_ITEM:
      return [...state, action.payload];
    case TodoActionTypes.DELETE_ITEM:
      return state.filter((item) => item.id !== action.payload);
    default:
      return state;
  }
}
