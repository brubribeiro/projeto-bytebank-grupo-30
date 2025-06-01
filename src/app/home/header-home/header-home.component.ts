import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from '../../interfaces/menu-item.interface';

@Component({
  selector: 'app-header-home',
  templateUrl: './header-home.component.html',
  styleUrl: './header-home.component.scss',
})
export class HeaderHomeComponent {
  constructor(private routes: Router) {}

  menuItems: Array<MenuItem> = [
    { label: 'Sobre', route: 'dashboard/#', active: true },
    { label: 'Serviços', route: 'dashboard/#', active: false },
    { label: 'Abrir conta', route: 'dashboard/#', active: false },
    { label: 'Já tenho conta', route: 'dashboard/#', active: false },
  ];
  onClick(): void {
    this.routes.navigate(['/dashboard']);
  }
}
