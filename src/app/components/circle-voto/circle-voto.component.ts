import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-circle-voto',
  templateUrl: './circle-voto.component.html',
  styleUrls: ['./circle-voto.component.css']
})
export class CircleVotoComponent {

  @Input() voto: string;

  constructor() { }

}
