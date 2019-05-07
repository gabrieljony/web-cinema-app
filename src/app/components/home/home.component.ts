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

        this.novosFilmes = data;
        this.loading = false;
      });
  }

}
