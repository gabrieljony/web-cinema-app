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

  video: any[] = [];
  youtube: any = {};

  genres: any[] = [];

  url: string = 'http://www.youtube.com/v/';

  constructor(private router: ActivatedRoute, private filmeService: FilmeService) {

    this.router.params.subscribe(params => {

      this.filmeService.getMovie(params['id'])
        .subscribe(filme => {
          this.filme = filme;
          console.log(this.filme, "filme do filme");
          console.log(this.genres, "genero do filme");
        })

        this.filmeService.getVideo(params['id'])
        .subscribe(video => {
          this.video = video.results;
          console.log(this.video, "video do filme");
        })

        // this.filmeService.getQueryYoutube('95ghQs5AmNk')
        // .subscribe(youtube => {
        //   this.youtube = youtube;
        //   console.log(this.youtube, "youtube do filme");
        // })
    })
  }
}
