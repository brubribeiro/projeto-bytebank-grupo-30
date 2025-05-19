import { Transaction } from './transaction.model';

export interface Account {
  id: string;
  balance: number;
  transactions: Transaction[];
}
