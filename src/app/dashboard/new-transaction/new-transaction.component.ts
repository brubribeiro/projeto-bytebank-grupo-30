import { Component } from '@angular/core';
import { TransactionService } from '../../services/transaction.service';
import { Transaction } from '../../models/transaction.model';
import { TransactionType } from '../../enums/transaction-type.enum';

@Component({
  selector: 'app-new-transaction',
  templateUrl: './new-transaction.component.html',
  styleUrls: ['./new-transaction.component.scss'],
})
export class NewTransactionComponent {
  transactionType: TransactionType = TransactionType.DEPOSIT;
  amount: number = 0;

  constructor(private transactionService: TransactionService) {}

  finishTransaction(): void {
    const transaction: Omit<Transaction, 'type'> = {
      id: Math.random().toString(36).substring(2, 15),
      value: this.amount,
      date: new Date(),
    };

    if (this.transactionType === TransactionType.DEPOSIT) {
      this.transactionService.addMoney(transaction).subscribe({
        next: () => console.log('Entrada realizada com sucesso'),
        error: (err) => console.error('Erro ao realizar entrada:', err),
      });
    } else if (this.transactionType === TransactionType.TRANSFER) {
      this.transactionService.removeMoney(transaction).subscribe({
        next: () => console.log('Saída realizada com sucesso'),
        error: (err) => console.error('Erro ao realizar saída:', err),
      });
    } else {
      console.warn('Tipo de transação desconhecido');
    }

    this.amount = 0;
    this.transactionType = TransactionType.DEPOSIT;
  }
}
