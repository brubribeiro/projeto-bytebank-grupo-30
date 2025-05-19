import { Component } from '@angular/core';

interface MenuItem {
  label: string;
  path: string;
  active: boolean;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  menuItems: MenuItem[] = [
    { label: 'Início', path: '#', active: true },
    { label: 'Transferências', path: '#', active: false },
    { label: 'Investimentos', path: '#', active: false },
    { label: 'Outros Serviços', path: '#', active: false }
  ];
}
