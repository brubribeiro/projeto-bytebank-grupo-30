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

  /**
   * Busca todas as transações da conta.
   *
   * @returns Observable<Transaction[]> que emite todas as transações
   */
  getByAccount() {
    console.log('Fetching transactions for the account');
    return this.findAll();
  }

  /**
   * Retorna o saldo atual da conta somando todas as transações.
   *
   * - Utiliza o operador RxJS `map` para somar os valores das transações.
   *
   * @returns Observable<number> que emite o saldo calculado
   */
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

  /**
   * Realiza uma transação de entrada (depósito) adicionando dinheiro à conta.
   *
   * - Cria uma nova transação do tipo DEPOSIT.
   * - Utiliza o método `create` para persistir a transação.
   * - O operador RxJS `pipe` permite encadear operadores, como o `tap`.
   * - O operador `tap` executa um efeito colateral ao emitir um evento para o Subject `transactionsUpdated`
   *   através do método `next()`, notificando assinantes sobre a atualização das transações.
   *
   * @param transaction Dados da transação (exceto o tipo)
   * @returns Observable<Transaction> que emite a transação criada
   */
  addMoney(transaction: Omit<Transaction, 'type'>): Observable<Transaction> {
    const entrada = { ...transaction, type: TransactionType.DEPOSIT };
    return this.create(entrada).pipe(
      tap(() => this.transactionsUpdated.next())
    );
  }

  /**
   * Realiza uma transação de saída (transferência) removendo dinheiro da conta.
   *
   * - Cria uma nova transação do tipo TRANSFER, garantindo que o valor seja negativo.
   * - Utiliza o método `create` para persistir a transação.
   * - O operador RxJS `pipe` permite encadear operadores, como o `tap`.
   * - O operador `tap` executa um efeito colateral ao emitir um evento para o Subject `transactionsUpdated`
   *   através do método `next()`, notificando assinantes sobre a atualização das transações.
   *
   * @param transaction Dados da transação (exceto o tipo)
   * @returns Observable<Transaction> que emite a transação criada
   */
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
