import { Component } from '@angular/core';
import { FilmeService } from 'src/app/services/filme.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  novosFilmes: any[] = [];
  loading: boolean;
  valorInput:string;

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
    console.log(event.novoValor);

    this.loading = true;


    this.filmeService.getPage(event.novoValor).subscribe((data: any) => {
      console.log("data Lista de Filmes - na determinada pagina home");
      console.log(data);
      this.novosFilmes = data;
      this.loading = false;
    });
  }

}
