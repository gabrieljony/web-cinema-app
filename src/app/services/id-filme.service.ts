import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmeService } from './filme.service';

@Injectable({
  providedIn: 'root'
})
export class IdFilmeService {

  genres: any[] = [];

  constructor(private router: ActivatedRoute, private filmeService: FilmeService) { }

  generoFilme() {
    this.router.params.subscribe(params => {
      console.log(params);

      this.filmeService.getMovie(params['id'])
        .subscribe(filme => {
          console.log(filme);
          this.genres = filme.genres;

        });
    });

  }
}
