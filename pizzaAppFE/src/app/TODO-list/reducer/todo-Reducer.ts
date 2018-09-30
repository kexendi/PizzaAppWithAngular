import { TodoItem } from '../todo-STORE.model';
import { Action } from '@ngrx/store';

export const ADD_TODO = 'ADD_TODO';

export function addTodoReducer(state: TodoItem[] = [], action) {
  switch (action.type) {
    case ADD_TODO:
        return [...state, action.payload];
    default:
        return state;
    }
}
