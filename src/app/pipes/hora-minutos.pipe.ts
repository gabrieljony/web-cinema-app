import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'horaMinutos'
})
export class HoraMinutosPipe implements PipeTransform {

  transform(value: number): string {
    const horas: number = Math.floor(value / 60);
       return horas.toString().padStart(2) + 'h:' +  (value - horas * 60).toString().padStart(2, '0') + 'min';
  }

}
