import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FilmeService } from 'src/app/services/filme.service';

@Component({
  selector: 'app-listar-filmes',
  templateUrl: './listar-filmes.component.html',
  styleUrls: ['./listar-filmes.component.css']
})
export class ListarFilmesComponent {

  @Input() listaFilme: any[] = [];
  filme: any = {};

  genres: any[] = [];

  constructor(private router: Router, private filmeService: FilmeService, private activatedRoute: ActivatedRoute) { 

  }

  clickFilme(item: any) {
    let idFilme;
    idFilme = item.id;
    this.router.navigate(['/filme', idFilme]);
  }

}
