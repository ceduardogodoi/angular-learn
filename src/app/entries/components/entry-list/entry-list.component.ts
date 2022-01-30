import { Component } from '@angular/core';
import { Entry } from 'src/app/entries/shared/entry.model';
import { EntryService } from 'src/app/entries/shared/entry.service';

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.scss'],
})
export class EntryListComponent {
  readonly entries: Entry[];

  constructor(private entryService: EntryService) {
    this.entries = this.entryService.getAll();
  }
}
