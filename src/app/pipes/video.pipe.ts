import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'videoPipe'
})
export class VideoPipe implements PipeTransform {

  transform(video: any): any {

    let url: string = 'http://www.youtube.com/v/';

    if (video.key) {
      return url + video.key;
    }

  }

}
