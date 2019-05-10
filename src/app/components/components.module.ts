import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoYoutubeComponent } from './video-youtube/video-youtube.component';
import { CircleVotoComponent } from './circle-voto/circle-voto.component';
import { BtnGeneroComponent } from './btn-genero/btn-genero.component';

@NgModule({
  declarations: [
    VideoYoutubeComponent,
    CircleVotoComponent,
    BtnGeneroComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    VideoYoutubeComponent,
    CircleVotoComponent,
    BtnGeneroComponent
  ]
})
export class ComponentsModule { }
