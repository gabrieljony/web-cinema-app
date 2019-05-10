import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-paginacao',
  templateUrl: './paginacao.component.html',
  styleUrls: ['./paginacao.component.css']
})
export class PaginacaoComponent {

  valor: number = 1;

  @Output() mudouPagina = new EventEmitter();

  constructor() { }

  voltar() {
    if (this.valor > 1) {
      this.valor--;
      this.mudouPagina.emit({novoValor: this.valor});
    }
  }

  avancar() {
    this.valor++;
    this.mudouPagina.emit({novoValor: this.valor});
  }

}
