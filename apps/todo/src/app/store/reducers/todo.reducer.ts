import { TodoActionTypes } from '../actions/todo.actions';
import { TodoTask } from '../models/todo-task.model';

export interface TodoState {
  list: TodoTask[];
  loading: boolean;
  error: Error;
}

const initialState: TodoState = {
  list: [],
  loading: false,
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  error: undefined!,
};

export function TodoReducer(state: TodoState = initialState, action: any) {
  switch (action.type) {
    case TodoActionTypes.LOAD_ITEM:
      return {
        ...state,
        loading: true,
      };
    case TodoActionTypes.LOAD_ITEM_SUCCESS:
      return {
        ...state,
        list: action.payload,
        loading: false,
      };
    case TodoActionTypes.LOAD_ITEM_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case TodoActionTypes.ADD_ITEM:
      return {
        ...state,
        loading: true,
      };
    case TodoActionTypes.ADD_ITEM_SUCCESS:
      return {
        ...state,
        list: [...state.list, { todo: action.payload }],
        loading: false,
      };
    case TodoActionTypes.ADD_ITEM_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case TodoActionTypes.DELETE_ITEM:
      return {
        ...state,
        loading: true,
      };
    case TodoActionTypes.DELETE_ITEM_SUCESS:
      return {
        ...state,
        list: state.list.filter((item) => item.id !== action.payload),
        loading: false,
      };
    case TodoActionTypes.DELETE_ITEM_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}
