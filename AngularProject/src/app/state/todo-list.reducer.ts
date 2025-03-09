import { createReducer, on } from '@ngrx/store';
import { addTask, completeTask, deleteTask } from './todo-list.actions';

export interface Task {
  id: number;
  task: string;
  completed: boolean;
  
}

const initialState: Task[] = []; 

export const todoListReducer = createReducer(
  initialState,
  on(addTask, (state, { task }) => [
    ...state,
    { id: state.length + 1, task, completed: false } 
  ]),
  on(completeTask, (state, { id }) => state.map(task =>
    task.id === id ? { ...task, completed: !task.completed } : task 
  )),
  on(deleteTask, (state, { id }) => state.filter(task => task.id !== id)) 
);
