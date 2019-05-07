import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-circle-voto',
  templateUrl: './circle-voto.component.html',
  styleUrls: ['./circle-voto.component.css']
})
export class CircleVotoComponent implements OnInit {

  voto: string = '75%';

  constructor() { }

  ngOnInit() {
  }

}
