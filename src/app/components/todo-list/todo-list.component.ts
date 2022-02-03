import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  todos$?: Observable<string[]>;

  constructor(private readonly todoService: TodoService) {}

  ngOnInit(): void {
    this.todos$ = this.todoService.getAll();
  }
}
