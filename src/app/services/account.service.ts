import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Account } from '../models/account.model';
import { BaseService } from './base.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AccountService extends BaseService<Account> {
  private accountSubject = new BehaviorSubject<Account | null>(null);
  account$ = this.accountSubject.asObservable();

  constructor(http: HttpClient) {
    super(http, 'accounts');
  }

  loadAccount(): Observable<Account> {
    return this.findById('1').pipe(
      tap((account) => this.accountSubject.next(account))
    );
  }

  getAccountSnapshot(): Account | null {
    return this.accountSubject.getValue();
  }

  updateAccountName(id: string, newName: string): Observable<Account> {
    const currentAccount = this.getAccountSnapshot();
    if (!currentAccount) {
      throw new Error('No account loaded');
    }
    return this.patch(`${id}`, {
      customer: {
        id: currentAccount.customer.id,
        name: newName,
        email: currentAccount.customer.email,
      },
      id: currentAccount.id,
      number: currentAccount.number,
      balance: currentAccount.balance,
    }).pipe(tap((updatedAccount) => this.accountSubject.next(updatedAccount)));
  }
}
