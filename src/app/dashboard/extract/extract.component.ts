import { Component } from '@angular/core';

interface ExtratoItem {
  mes: string;
  tipo: string;
  valor: number;
  data: string;
}

@Component({
  selector: 'app-extract',
  templateUrl: './extract.component.html',
  styleUrls: ['./extract.component.scss'],
})
export class ExtractComponent {
  extrato: ExtratoItem[] = [
    { mes: 'Novembro', tipo: 'Depósito', valor: 150, data: '18/11/2022' },
    { mes: 'Novembro', tipo: 'Depósito', valor: 100, data: '21/11/2022' },
    { mes: 'Novembro', tipo: 'Depósito', valor: 50, data: '21/11/2022' },
    { mes: 'Novembro', tipo: 'Transferência', valor: -500, data: '21/11/2022' },
  ];
}
