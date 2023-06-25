import { Component, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/Todos';

@Component({
  selector: 'app-add-todo-form',
  templateUrl: './add-todo-form.component.html',
  styleUrls: ['./add-todo-form.component.css']
})
export class AddTodoFormComponent {

  todoTitle!: string;
  todoDesc!: string;

  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();

  onSubmit(){
    console.log("onSubmit clicked")
    if(this.todoTitle == undefined || this.todoTitle.trim().length == 0 || this.todoDesc == undefined || this.todoDesc.trim().length == 0){
      return ;
    }
    const todo : Todo = {
      sno: 6,
      title: this.todoTitle,
      desc: this.todoDesc,
      active: true
    };

    this.todoAdd.emit(todo);

    this.todoTitle = "";
    this.todoDesc = "";

  }

}
