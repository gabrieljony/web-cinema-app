import { Component, OnInit } from '@angular/core';
import { FilmeService } from 'src/app/services/filme.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  novosFilmes: Object[] = [];
  loading: boolean;
  valorInput: string;

  constructor(private filmeService: FilmeService) {

    this.loading = true;

    this.filmeService.getDiscoverMovie()
      .subscribe((data: any) => {
        this.novosFilmes = data;
        this.loading = false;
      });

  }

  buscar(input: string) {
    this.loading = true;

    this.filmeService.getSearchMovie(input)
      .subscribe((data: any) => {
        this.novosFilmes = data;
        this.loading = false;
      });
  }

  onMudouPagina(event) {
    this.loading = true;
    
    this.filmeService.getPage(event.novoValor).subscribe((data: any) => {
      this.novosFilmes = data;
      this.loading = false;
    });
  }

}
