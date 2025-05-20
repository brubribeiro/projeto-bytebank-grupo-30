import { Component } from '@angular/core';

@Component({
  selector: 'app-new-transaction',
  templateUrl: './new-transaction.component.html',
  styleUrl: './new-transaction.component.css'
})
export class NewTransactionComponent {

  tipoTransacao: string = '';
  valor: number | null = null;

  concluirTransacao() {
    console.log('Tipo:', this.tipoTransacao);
    console.log('Valor:', this.valor);
    
  }

}
