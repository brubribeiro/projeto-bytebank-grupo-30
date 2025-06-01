import { Component } from '@angular/core';
import { MenuItem } from '../../interfaces/menu-item.interface';

@Component({
  selector: 'app-header-home',
  templateUrl: './header-home.component.html',
  styleUrl: './header-home.component.scss',
})
export class HeaderHomeComponent {
  menuItems: Array<MenuItem> = [
    { label: 'Sobre', route: 'dashboard/#', active: true },
    { label: 'Serviços', route: 'dashboard/#', active: false },
    { label: 'Abrir minha conta', route: 'dashboard/#', active: false, class: 'header__action header__action--primary' },
    { label: 'Já tenho conta', route: 'dashboard/#', active: false, class: 'header__action header__action--secondary' },
  ];
}
