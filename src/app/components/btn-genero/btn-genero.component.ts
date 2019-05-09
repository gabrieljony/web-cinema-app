import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmeService } from 'src/app/services/filme.service';

@Component({
  selector: 'app-btn-genero',
  templateUrl: './btn-genero.component.html',
  styleUrls: ['./btn-genero.component.css']
})
export class BtnGeneroComponent {

  
  @Input() id;
  
  @Input() itens: Object[] = [];
  @Input() genero: Object[] = [];
  @Input() lista: Object[] = [];

  listgeneros: Object[] = [];

  constructor(private filmeService: FilmeService) {

   }

}
