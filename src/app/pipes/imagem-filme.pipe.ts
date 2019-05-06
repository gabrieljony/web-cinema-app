import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imagemFilme'
})
export class ImagemFilmePipe implements PipeTransform {

  transform(filme: any): any {

    let url: string = 'http://image.tmdb.org/t/p/w400';

    if (filme.poster_path) {
      return url + filme.poster_path;
    } else {
      if (filme.backdrop_path) {
        return url + filme.backdrop_path;
      } else {
        return 'assets/img/noimage.png';
      }
    }
  }

}
