import { Component } from '@angular/core';
import { FilmeService } from 'src/app/services/filme.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  filmes: any[] = [];
  novosFilmes: any[] = [];
  loading: boolean;

  constructor(private filmeService: FilmeService) {
    this.loading = true;

    this.filmeService.getDiscoverMovie()
      .subscribe((data: any) => {

        console.log(data);
        this.novosFilmes = data;
        this.loading = false;
      });
  }

  buscar(input: string) {
    console.log("Campo");
    console.log(input);

    this.loading = true;
    this.filmeService.getSearchMovie(input).subscribe((data: any) => {
      console.log("Data");
      console.log(data);

      console.log("Filmes");
      this.novosFilmes = data;
      this.loading = false;
    });
  }

}
