import { Injectable } from '@angular/core';
import { Entry, EntryType } from './entry.model';
import entriesMock from './entries.mock.json';

@Injectable({
  providedIn: 'root',
})
export class EntryService {
  private readonly entries: Entry[];

  constructor() {
    this.entries = entriesMock as Entry[];
  }

  add(entry: Entry): void {
    this.entries.push(entry);
  }

  getAll(): Entry[] {
    return this.entries;
  }

  getCount(): number {
    return this.entries.length;
  }

  getBalance(): number {
    return this.entries.reduce((balance, entry) => {
      if (entry.type === EntryType.INCOME) {
        balance += entry.value;
      }

      if (entry.type === EntryType.OUTCOME) {
        balance -= entry.value;
      }

      return balance;
    }, 0);
  }
}
