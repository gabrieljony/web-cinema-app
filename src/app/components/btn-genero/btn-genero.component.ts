import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmeService } from 'src/app/services/filme.service';

@Component({
  selector: 'app-btn-genero',
  templateUrl: './btn-genero.component.html',
  styleUrls: ['./btn-genero.component.css']
})
export class BtnGeneroComponent {

  @Input() itens: any[] = [];

  @Input() id;

  genres: any[] = [];

  constructor(private filmeService: FilmeService) { }

  metodo(){
    this.filmeService.getMovie('450465')
        .subscribe(filme => {
          this.genres = filme.genres;
        })

  }

}
