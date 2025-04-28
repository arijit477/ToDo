import { Component, OnInit } from '@angular/core';
import { Todo } from "../../Todo";
import { from } from "rxjs";
import { CommonModule, DatePipe } from '@angular/common';
import { TodoItemComponent } from "../todo-item/todo-item.component";
import { AddTodoComponent } from "../add-todo/add-todo.component";
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-todos',
  imports: [CommonModule, TodoItemComponent, AddTodoComponent],
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']

})
export class TodosComponent implements OnInit {
localItem:string | null 




  todos:Todo[] ;

  constructor(){
   
    
    if (typeof localStorage !== 'undefined') {
        this.localItem = localStorage.getItem("todos") as string | null;
    } else {
        this.localItem = null;
    }


    if (this.localItem==null) {
      this.todos = [];
    }else{
      this.todos = JSON.parse(this.localItem);
    }
  }

  ngOnInit(): void {
      
  }
  deleteTodo(todo: Todo) {
    const index = this.todos.indexOf(todo);
    this.todos.splice(index,1);
    localStorage.setItem("todos",JSON.stringify(this.todos))
  
  }
  addTodo(todo: Todo) {
    // console.log(todo);
    this.todos.push(todo);
    localStorage.setItem("todos",JSON.stringify(this.todos))

  
  }
  toggleTodo(todo: Todo) {
    const index = this.todos.indexOf(todo);
    console.log(todo);
    this.todos[index].active=!this.todos[index].active;
    localStorage.setItem("todos",JSON.stringify(this.todos))

  
  }

}
