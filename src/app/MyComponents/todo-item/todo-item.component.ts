import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from 'src/app/Todos';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  @Input() todo!: Todo;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  
  delBtnClicked(todo: Todo): void {
    this.todoDelete.emit(todo);
    console.log(`delete button clicked for ${todo.sno}`);
    console.log(todo);
  }

}
