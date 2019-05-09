import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmeService } from 'src/app/services/filme.service';

@Component({
  selector: 'app-filme',
  templateUrl: './filme.component.html',
  styleUrls: ['./filme.component.css']
})
export class FilmeComponent {

  filme: any = {};

  language: string[] = [];
  genres: string[] = [];
  video: string[] = [];

  constructor(private router: ActivatedRoute, private filmeService: FilmeService) {

    this.router.params.subscribe(params => {

      this.filmeService.getMovieId(params['id'])
        .subscribe(filme => {
          this.filme = filme;
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
