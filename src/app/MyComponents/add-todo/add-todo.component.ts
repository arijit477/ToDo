import { Component, EventEmitter, NgModule, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todo } from '../../Todo';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-add-todo',
  imports: [CommonModule,FormsModule ],
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {
  title!: string;
  desc!: string;
 
  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();

  onSubmit() {
    const todo: Todo = {
      sno: 8,
      title: this.title,
      desc: this.desc,
      active: true,
      date: new Date()
    };
    this.todoAdd.emit(todo); // Emit the new todo
  }
}
