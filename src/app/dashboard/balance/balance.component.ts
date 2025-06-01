import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../../services/transaction.service';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrl: './balance.component.scss',
})
export class BalanceComponent implements OnInit {
  saldo = 0;
  nome = 'Joana da Silva';
  hoje = new Date();
  saldoVisivel = true;

  constructor(private transactionService: TransactionService) {}

  get nomeCurto() {
    return this.nome.split(' ')[0];
  }

  ngOnInit(): void {
    this.loadBalance();

    this.transactionService.transactionsUpdated$.subscribe(() => {
      this.loadBalance();
    });
  }

  private loadBalance(): void {
    this.transactionService.getBalance().subscribe({
      next: (balance) => (this.saldo = balance),
      error: (err) => console.error('Erro ao carregar saldo:', err),
    });
  }
}
