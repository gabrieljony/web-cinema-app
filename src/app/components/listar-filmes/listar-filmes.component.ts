import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FilmeService } from 'src/app/services/filme.service';

@Component({
  selector: 'app-listar-filmes',
  templateUrl: './listar-filmes.component.html',
  styleUrls: ['./listar-filmes.component.css']
})
export class ListarFilmesComponent {

  @Input() listaFilme: any[] = [];

  filmes: any[] = [];
  filme: any = {};
  id: number;
  genres: any[] = [];
  listgeneros: any[] = [];


  constructor(private router: Router, private filmeService: FilmeService) {

    this.filmeService.getGenre()
        .subscribe(genres => {
          this.listgeneros = genres.genres;
    });

  }

  clickFilme(item: any) {
    const idFilme = item.id;
    this.router.navigate(['/filme', idFilme]);
  }

}
