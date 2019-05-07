import { FilmeService } from './services/filme.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  constructor(public filmeService: FilmeService) {
    this.filmeService.getDiscoverMovie().subscribe(data => console.log(data));
  }
}
