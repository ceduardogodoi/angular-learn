import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private readonly todos: string[];
  private readonly todosStream: BehaviorSubject<string[]>;

  constructor() {
    this.todos = ['Buy milk', 'Buy bread'];
    this.todosStream = new BehaviorSubject(this.todos);
  }

  getAll(): Observable<string[]> {
    return this.todosStream.asObservable();
  }

  add(todo: string): void {
    // pushes a new todo to todos array
    this.todos.push(todo);
    // emits the new todos array value to its subscribers
    this.todosStream.next(this.todos);
  }

  getCount(): Observable<number> {
    const countStream = new BehaviorSubject(0);
    this.todosStream.subscribe((todos) => {
      countStream.next(todos.length);
    });

    return countStream.asObservable();
  }
}
