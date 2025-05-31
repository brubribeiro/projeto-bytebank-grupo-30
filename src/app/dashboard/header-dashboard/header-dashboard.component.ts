import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header-dashboard',
  templateUrl: './header-dashboard.component.html',
  styleUrl: './header-dashboard.component.scss'
})
export class HeaderDashboardComponent {
  @Input() nome = 'Joana da Silva';

  toggleSidenav(): void {
    
  }
}
