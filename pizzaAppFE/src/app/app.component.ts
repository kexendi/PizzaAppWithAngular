import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AppState } from './app.state';
import { Store } from '@ngrx/store';
import { TodoItem } from './TODO-list/todo-STORE.model';
import { ADD_TODO} from './TODO-list/reducer/todo-Reducer';
import { DisplayService } from './display.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'todoApp';
  pizzas: any;

  angForm: FormGroup;

  constructor(
    private store: Store<AppState>,
    private fb: FormBuilder,
    private displayService: DisplayService
    ) {
      this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      name: ['', Validators.required ],
      done: ['', Validators.required ],
      topping: ['fasz habbal', Validators.required ],
      price: ['', Validators.required ]
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


  getAllPizza() {
    this.displayService.getPizzas().subscribe( data => {
      this.pizzas = data;
    });
  }

  postPizza(topping, price) {
    const data = {
      topping: topping,
      price: price
    };

    this.displayService.postPizza(data).subscribe( () => {
      this.getAllPizza();
    });
  }

  ngOnInit() {
    this.getAllPizza();
  }
}
