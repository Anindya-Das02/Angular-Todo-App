import { Component } from '@angular/core';
import { Todo } from 'src/app/Todos';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {

  todos: Todo[];
  localItem: string | null;

  constructor(){
    this.localItem = localStorage.getItem("todos");
    if(this.localItem == null){
      this.todos = [];
    }else{
      this.todos = JSON.parse(this.localItem);
    }

  }

  deleteTodo(todo: Todo){
    console.log("Todo-Component::deleteTodo triggered");
    console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos.splice(index,1);
    this.storeTodos(this.todos);
  }
  
  addToDoTask(todo: Todo){
    console.log("adding item to todo-list");
    console.log(todo);
    this.todos.push(todo);
    this.storeTodos(this.todos);
  }

  storeTodos(todos: Todo[]){
    localStorage.setItem("todos",JSON.stringify(todos));
  }

}
