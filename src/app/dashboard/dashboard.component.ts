import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../services/transaction.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit {
  nome = 'Joana da Silva Oliveira';
  saldo: number = 0;

  constructor(private transactionService: TransactionService) {}

  ngOnInit(): void {
    this.transactionService.getBalance().subscribe({
      next: (balance) => (this.saldo = balance),
      error: (err) => console.error('Erro ao carregar saldo:', err),
    });
  }
}
