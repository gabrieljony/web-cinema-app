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

  @Input() genero;

  constructor(private filmeService: FilmeService) { }

}
