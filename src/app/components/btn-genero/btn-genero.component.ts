import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-btn-genero',
  templateUrl: './btn-genero.component.html',
  styleUrls: ['./btn-genero.component.css']
})
export class BtnGeneroComponent {

  @Input() genero: Object[] = [];
  @Input() lista: Object[] = [];

  constructor() { }

}
