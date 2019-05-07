import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-filmes',
  templateUrl: './listar-filmes.component.html',
  styleUrls: ['./listar-filmes.component.css']
})
export class ListarFilmesComponent {

  @Input() listaFilme: any[] = [];

  constructor(private router: Router) { }

  clickFilme(item: any) {
    let idFilme;
    idFilme = item.id;
    this.router.navigate(['/filme', idFilme]);
  }

}
