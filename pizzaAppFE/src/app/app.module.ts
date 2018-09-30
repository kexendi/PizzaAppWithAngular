import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { addTodoReducer } from './TODO-list/reducer/todo-Reducer';
import { ReactiveFormsModule } from '@angular/forms';
import { DisplayComponent } from './display.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ todoItem: addTodoReducer}),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
