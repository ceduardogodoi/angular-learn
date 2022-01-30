// type EntryType = 'income' | 'outcome';

export enum EntryType {
  INCOME = 'income',
  OUTCOME = 'outcome',
}

export interface Entry {
  type: EntryType;
  value: number;
  description: string;
}
