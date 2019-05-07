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
  genres: any[] = [];

  constructor(private router: ActivatedRoute, private filmeService: FilmeService) {

    this.router.params.subscribe(params => {
      // console.log("parametro");
      // console.log(params);

      this.filmeService.getMovie(params['id'])
        .subscribe(filme => {
          // console.log("filme");
          console.log(filme);
          this.filme = filme;
          // console.log("this.filme");
          // console.log(this.filme);
          this.genres = filme.genres;
          // console.log("genero");
          // console.log(this.genres);
        })
    })
  }

}
