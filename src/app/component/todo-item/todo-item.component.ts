import { Route } from '@angular/compiler/src/core';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Todo } from 'src/app/model/todo.model';
import { TodoService } from 'src/app/service/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @Output() DeleteClick: EventEmitter<Todo> = new EventEmitter();
  @Output() addTodo: EventEmitter<any> = new EventEmitter();

  selectedTodo: Todo;
  id: number;
  text: string;
  title: string;
  constructor(private router: Router) {}

  ngOnInit(): void {}

  onDelete(todo: Todo) {
    this.DeleteClick.emit(todo);
  }

  onSubmit() {
    const todo = {
      title: this.title,
      id: this.id,
      text: this.text,
    };

    this.addTodo.emit(todo);
  }
  onSelete(todo: Todo) {
    this.selectedTodo = todo;
  }

  onDetail() {
    this.router.navigate(['/todo', this.selectedTodo.id]);
  }
}
