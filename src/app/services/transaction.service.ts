import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Transaction } from '../models/transaction.model';
import { TransactionType } from '../enums/transaction-type.enum';
import { BaseService } from './base.service';
import { Observable, firstValueFrom, Subject } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class TransactionService extends BaseService<Transaction> {
  private transactionsUpdated = new Subject<void>();

  public transactionsUpdated$ = this.transactionsUpdated.asObservable();

  constructor(http: HttpClient) {
    super(http, 'transactions');
  }

  getByAccount() {
    console.log('Fetching transactions for the account');
    return this.findAll();
  }

  getBalance(): Observable<number> {
    return this.getByAccount().pipe(
      map((transactions: Transaction[]) =>
        transactions.reduce((total, t) => total + t.value, 0)
      )
    );
  }

  async getBalanceSync(): Promise<number> {
    const transactions = await firstValueFrom(this.getByAccount());
    return transactions.reduce((total, t) => total + t.value, 0);
  }

  addMoney(transaction: Omit<Transaction, 'type'>): Observable<Transaction> {
    const entrada = { ...transaction, type: TransactionType.DEPOSIT };
    return this.create(entrada).pipe(
      tap(() => this.transactionsUpdated.next())
    );
  }

  removeMoney(transaction: Omit<Transaction, 'type'>): Observable<Transaction> {
    const saida = {
      ...transaction,
      type: TransactionType.TRANSFER,
      value: -Math.abs(transaction.value),
    };
    return this.create(saida).pipe(tap(() => this.transactionsUpdated.next()));
  }

  updateTransactions(): void {
    this.transactionsUpdated.next();
  }
}
