import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private readonly todos = ['Buy milk', 'Buy bread'];
  private readonly todos$ = new BehaviorSubject(this.todos);

  getAll() {
    return this.todos$.asObservable();
  }

  add(todo: string) {
    // pushes a new todo to todos array
    this.todos.push(todo);
    // emits the new todos array value to its subscribers
    this.todos$.next(this.todos);
  }

  getCount() {
    const count$ = new BehaviorSubject(0);
    this.todos$.subscribe((todos) => {
      count$.next(todos.length);
    });

    return count$.asObservable();
  }
}
