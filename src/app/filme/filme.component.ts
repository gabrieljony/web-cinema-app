import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmeService } from 'src/app/services/filme.service';

@Component({
  selector: 'app-filme',
  templateUrl: './filme.component.html',
  styleUrls: ['./filme.component.css']
})
export class FilmeComponent {

  filme: Object[] = [];
  language: Object[] = [];
  genres: Object[] = [];
  video: string[] = [];

  constructor(private router: ActivatedRoute, private filmeService: FilmeService) {

    this.router.params.subscribe(params => {

      this.filmeService.getMovieId(params['id'])
        .subscribe(filmes => {
          this.filme = filmes;
          this.genres = filmes.genres;
      });

      this.filmeService.getVideo(params['id'])
        .subscribe(video => {
          this.video = video.results;
      });

    });

    this.filmeService.getLanguages()
        .subscribe(language => {
          this.language = language;
    });
  }

}
