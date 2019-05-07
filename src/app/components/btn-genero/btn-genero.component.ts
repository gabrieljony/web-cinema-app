import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmeService } from 'src/app/services/filme.service';

@Component({
  selector: 'app-btn-genero',
  templateUrl: './btn-genero.component.html',
  styleUrls: ['./btn-genero.component.css']
})
export class BtnGeneroComponent {

  genres: any[] = [];

  constructor(private router: ActivatedRoute, private filmeService: FilmeService) {
    
    this.router.params.subscribe(params => {

      this.filmeService.getMovie(params['id'])
        .subscribe(filme => {
          this.genres = filme.genres;
        })
    })
  }

}
