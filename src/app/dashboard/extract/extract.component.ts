import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../../services/transaction.service';
import { Transaction } from '../../models/transaction.model';

@Component({
  selector: 'app-extract',
  templateUrl: './extract.component.html',
  styleUrls: ['./extract.component.scss'],
})
export class ExtractComponent implements OnInit {
  extrato: Transaction[] = [];

  constructor(private transactionService: TransactionService) {}

  ngOnInit(): void {
    this.loadTransactions();

    this.transactionService.transactionsUpdated$.subscribe(() => {
      this.loadTransactions();
    });
  }

  private loadTransactions(): void {
    this.transactionService.getByAccount().subscribe({
      next: (data) => (this.extrato = data),
      error: (err) => console.error('Erro ao carregar extrato:', err),
    });
  }
}
