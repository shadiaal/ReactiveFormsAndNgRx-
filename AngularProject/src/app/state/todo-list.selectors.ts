// import { createSelector } from '@ngrx/store';
// import { Task } from './todo-list.reducer'; 


// export const selectTasks = createSelector(
//   (state: { tasks: Task[] }) => state.tasks, 
//   (tasks) => tasks 
// );

import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Task } from './todo-list.reducer';

export const selectTasks = createFeatureSelector<Task[]>('todos');

export const selectCompletedTasks = createSelector(
  selectTasks,
  (tasks: Task[]) => tasks.filter(task => task.completed)
);

export const selectIncompleteTasks = createSelector(
  selectTasks,
  (tasks: Task[]) => tasks.filter(task => !task.completed)
);
