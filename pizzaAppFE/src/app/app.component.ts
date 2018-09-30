import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AppState } from './app.state';
import { Store } from '@ngrx/store';
import { TodoItem } from './TODO-list/todo-STORE.model';
import { ADD_TODO} from './TODO-list/reducer/todo-Reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'todoApp';

  angForm: FormGroup;

  constructor(
    private store: Store<AppState>,
    private fb: FormBuilder
    ) {
      this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      name: ['', Validators.required ],
      done: ['', Validators.required ]
   });
  }

  addTodoList(name, done) {
    this.store.dispatch({
      type: ADD_TODO ,
      payload: <TodoItem> {
        name: name,
        done: done
      }
    });
  }

  ngOnInit() {
  }
}
