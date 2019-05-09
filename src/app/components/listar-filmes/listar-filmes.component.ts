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
     this.filmeService.getDiscoverMovie2()
      .subscribe((filme: any) => {
        this.filmes = filme;
        this.id = filme.vote_average;
        console.log(this.filmes, "filmes");
        console.log(this.id, "id");
        
      });

      this.filmeService.getMovie('299534')
        .subscribe(filme => {
          this.genres = filme.genres;
          this.id = filme.id;
          console.log(this.id, "id da busca");
          console.log(this.genres, "genero");
        })

  }

  clickFilme(item: any) {
    const idFilme = item.id;
    this.router.navigate(['/filme', idFilme]);
  }

}
