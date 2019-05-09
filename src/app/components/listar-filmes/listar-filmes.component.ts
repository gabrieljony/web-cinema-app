import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FilmeService } from 'src/app/services/filme.service';

@Component({
  selector: 'app-listar-filmes',
  templateUrl: './listar-filmes.component.html',
  styleUrls: ['./listar-filmes.component.css']
})
export class ListarFilmesComponent implements OnInit {

  @Input() listaFilme: any[] = [];

  filmes: any[] = [];
  filme: any = {};
  id: number;
  genres: any[] = [];


  constructor(private router: Router, private filmeService: FilmeService) {
    console.log(this.listaFilme, "lista de filme");
      this.filmeService.getMovieId('299534')
        .subscribe(filme => {
          this.genres = filme.genres;
        })

  }

  ngOnInit(): void {
    //throw new Error("Method not implemented.");
  }

  clickFilme(item: any) {
    const idFilme = item.id;
    this.router.navigate(['/filme', idFilme]);
  }

}
