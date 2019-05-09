import { Component, Input, EventEmitter, Output } from '@angular/core';
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
  filmes: any[] = [];

  id: number;

  constructor(private router: Router, private filmeService: FilmeService, private activatedRoute: ActivatedRoute) {
     this.filmeService.getDiscoverMovieList()
      .subscribe((filme: any) => {
        this.filmes = filme;
        this.filme = filme;
        this.id = filme.id;
      });

  }

  clickFilme(item: any) {
    const idFilme = item.id;
    this.router.navigate(['/filme', idFilme]);
  }

}
