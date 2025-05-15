import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Account } from '../models/account.model';
import { BaseService } from './base.service';

@Injectable({ providedIn: 'root' })
export class AccountService extends BaseService<Account> {
  constructor(http: HttpClient) {
    super(http, 'account');
  }
}
