import { createAction, props } from '@ngrx/store';
import { Task } from './todo-list.reducer';

export const addTask = createAction(
  '[Todo List] Add Task',
  props<{ task: string }>()
);

export const completeTask = createAction(
  '[Todo List] Complete Task',
  props<{ id: number }>()
);

export const deleteTask = createAction(
  '[Todo List] Delete Task',
  props<{ id: number }>()
);
