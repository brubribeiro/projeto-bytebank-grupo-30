import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrl: './balance.component.scss'
})
export class BalanceComponent {
  @Input() saldo = 0;
  @Input() nome = 'Joana da Silva';
  
  hoje = new Date();
  saldoVisivel = true;
  
  get nomeCurto() {
    return this.nome.split(' ')[0];
  }
}
