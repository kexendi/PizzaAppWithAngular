import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { addTodoReducer } from './TODO-list/reducer/todo-Reducer';
import { ReactiveFormsModule } from '@angular/forms';
import { DisplayComponent } from './display.component';
import { DisplayService } from './display.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ todoItem: addTodoReducer}),
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    DisplayService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
