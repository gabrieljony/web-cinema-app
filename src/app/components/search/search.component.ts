import { Component } from '@angular/core';
import { FilmeService } from 'src/app/services/filme.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  
  novosFilmes: any[] = [];
  loading: boolean;

  constructor(private filmeService: FilmeService) { }

  buscar(input: string) {
    console.log("Campo");
    console.log(input);

    this.loading = true;
    this.filmeService.getSearchMovie(input).subscribe((data: any) => {

      this.novosFilmes = data;
      this.loading = false;
    });
  }

}
