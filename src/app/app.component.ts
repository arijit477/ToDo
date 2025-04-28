import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodosComponent } from "./MyComponents/todos/todos.component";
import { CommonModule, NgFor } from '@angular/common';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TodosComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'chw-todo-list';
}
