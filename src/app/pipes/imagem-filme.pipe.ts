import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imagemFilme'
})
export class ImagemFilmePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
