import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Transaction } from '../models/transaction.model';
import { BaseService } from './base.service';

@Injectable({ providedIn: 'root' })
export class TransactionService extends BaseService<Transaction> {
  constructor(http: HttpClient) {
    super(http, 'transactions');
  }
}
