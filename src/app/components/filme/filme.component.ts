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

  constructor(private router: ActivatedRoute, private filmeService: FilmeService) {

    this.router.params.subscribe(params => {

      this.filmeService.getMovie(params['id'])
        .subscribe(filme => {
          this.filme = filme;
        })
    })
  }
}
