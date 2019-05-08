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

  constructor(private filmeService: FilmeService) {
    this.loading = true;

    this.filmeService.getDiscoverMovie()
      .subscribe((data: any) => {
        console.log("data Lista de Filmes - aquivo home");
        console.log(data);
        this.novosFilmes = data;
        this.loading = false;
      });

  }

  pagina(input: string) {
    console.log("Campo digitado");
    console.log(input);

    this.loading = true;
    this.filmeService.getQueryforPage(input).subscribe((data: any) => {
      console.log("data Lista de Filmes - dos novos filmes home");
      console.log(data);
      this.novosFilmes = data;
      this.loading = false;
    });

    this.filmeService.getPage(input).subscribe((data: any) => {
      console.log("data Lista de Filmes - na determinada pagina home");
      console.log(data);
    });
  }

}
