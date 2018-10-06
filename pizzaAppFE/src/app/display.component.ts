import { TodoItem } from './TODO-list/todo-STORE.model';
import { Component, OnInit } from '@angular/core';
import { AppState } from './app.state';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-display',
  templateUrl: './display.html',
})
export class DisplayComponent implements OnInit {

  todos: Observable<TodoItem[]>;
  constructor(private store: Store<AppState>) {
    this.todos = this.store.select(state => state.todoItem);
   }

  ngOnInit() {
      this.todos.subscribe({
        next(response) { console.log('lofaFszfasz:' + response); },
        error(err) { console.error('Error: ' + err); },
        complete() { console.log('Completed'); }
       });
  }

}
