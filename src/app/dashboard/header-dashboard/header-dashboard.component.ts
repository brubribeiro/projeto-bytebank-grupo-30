import { Component, Input } from '@angular/core';
import { MenuItem } from '../../interfaces/menu-item.interface';

@Component({
  selector: 'app-header-dashboard',
  templateUrl: './header-dashboard.component.html',
  styleUrl: './header-dashboard.component.scss'
})
export class HeaderDashboardComponent {
  @Input() nome = 'Joana da Silva';

  menuItems: MenuItem[] = [
    { label: 'Início', route: 'dashboard/#', active: true },
    { label: 'Transferências', route: 'dashboard/#', active: false },
    { label: 'Investimentos', route: 'dashboard/#', active: false },
    { label: 'Outros Serviços', route: 'dashboard/#', active: false }
  ];
}
