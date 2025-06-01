import { Component, OnInit } from '@angular/core';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit {
  customerName = '';

  constructor(private accountService: AccountService) {}

  ngOnInit(): void {
    this.accountService.loadAccount().subscribe({
      next: (account) => {
        this.customerName = account.customer.name;
      },
      error: (err) => {
        console.error('Erro ao carregar conta:', err);
      },
    });
  }
}
