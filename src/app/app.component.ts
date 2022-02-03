import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoService } from './services/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  newTodo: string;

  countTodo$?: Observable<number>;

  constructor(private readonly todoService: TodoService) {
    this.newTodo = '';
  }

  ngOnInit(): void {
    this.countTodo$ = this.todoService.getCount();
  }

  addTodo(): void {
    this.todoService.add(this.newTodo);
  }
}
