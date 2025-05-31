import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Transaction } from '../models/transaction.model';
import { BaseService } from './base.service';
import { Observable, firstValueFrom } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class TransactionService extends BaseService<Transaction> {
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
}
