import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../services/account.service';
import { MenuItem } from '../../interfaces/menu-item.interface';

@Component({
  selector: 'app-header-dashboard',
  templateUrl: './header-dashboard.component.html',
  styleUrl: './header-dashboard.component.scss',
})
export class HeaderDashboardComponent implements OnInit {
  nome = 'Joana da Silva';

  constructor(private accountService: AccountService) {}

  menuItems: Array<MenuItem> = [
    { label: 'Início', route: 'dashboard/#', active: true },
    { label: 'Transferências', route: 'dashboard/#', active: false },
    { label: 'Investimentos', route: 'dashboard/#', active: false },
    { label: 'Outros Serviços', route: 'dashboard/#', active: false },
  ];

  ngOnInit(): void {
    this.accountService.loadAccount().subscribe({
      next: (account) => {
        this.nome = account.customer.name;
      },
      error: (err) => {
        console.error('Erro ao carregar conta:', err);
      },
    });
  }

  updateCustomerName(): void {
    const novoNome = prompt('Digite o novo nome:', this.nome);
    if (novoNome && novoNome.trim() !== '') {
      this.accountService.updateAccountName('1', novoNome.trim()).subscribe({
        next: (account) => {
          this.nome = account.customer.name;
        },
        error: (err) => {
          console.error('Erro ao atualizar nome:', err);
        },
      });
    }
  }
}
