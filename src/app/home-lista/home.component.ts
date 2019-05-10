import { Component, OnInit } from '@angular/core';
import { FilmeService } from 'src/app/services/filme.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  novosFilmes: Object[] = [];
  valorInput: string;

  constructor(private filmeService: FilmeService) {

    this.filmeService.getDiscoverMovie()
      .subscribe((data: any) => {
        this.novosFilmes = data;
      });

  }

  buscar(input: string) {

    this.filmeService.getSearchMovie(input)
      .subscribe((data: any) => {
        this.novosFilmes = data;
      });
  }

  onMudouPagina(event) {
    
    this.filmeService.getPage(event.novoValor).subscribe((data: any) => {
      this.novosFilmes = data;
    });
  }

}
