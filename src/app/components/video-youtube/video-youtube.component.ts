import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-video-youtube',
  templateUrl: './video-youtube.component.html',
  styleUrls: ['./video-youtube.component.css']
})
export class VideoYoutubeComponent {

  @Input() videos: Object[] = [];

  constructor() { }

}
