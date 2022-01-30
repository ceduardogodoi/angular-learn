import { Component } from '@angular/core';
import { EntryService } from './entries/shared/entry.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  readonly entriesCount: number;
  readonly balance: number;

  constructor(private entryService: EntryService) {
    this.entriesCount = this.entryService.getCount();
    this.balance = this.entryService.getBalance();
  }
}
