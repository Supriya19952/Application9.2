import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'muMult',
  standalone: true
})
export class MuMultPipe implements PipeTransform {

  transform(value: number, param :number): number {
    value = value * param
    return value;
  }

}
