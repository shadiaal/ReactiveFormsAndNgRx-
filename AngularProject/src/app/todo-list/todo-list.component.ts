
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Task } from '../state/todo-list.reducer';
import { addTask, completeTask, deleteTask } from '../state/todo-list.actions';
import { selectTasks } from '../state/todo-list.selectors';
import { ReactiveFormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common'; 
@Component({
  selector: 'app-todo-list',
    standalone: true,
  imports: [CommonModule, ReactiveFormsModule], 
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  todoListForm: FormGroup;
  tasks$: Observable<Task[]>;

  constructor(private fb: FormBuilder, private store: Store) {
    this.todoListForm = this.fb.group({
      task: ['', Validators.required],
    });

    this.tasks$ = this.store.select(selectTasks);
  }

  onSubmit(): void {
    if (this.todoListForm.valid) {
      const task = this.todoListForm.value.task;
      this.store.dispatch(addTask({ task }));
      this.todoListForm.reset();
    }
  }

  onCompleteTask(id: number): void {
    this.store.dispatch(completeTask({ id }));
  }

  onDeleteTask(id: number): void {
    this.store.dispatch(deleteTask({ id }));
  }
}
