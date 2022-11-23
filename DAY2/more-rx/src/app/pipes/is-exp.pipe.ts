import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isExp'
})
export class IsExpPipe implements PipeTransform {

  transform(value: number, max: number = 10): unknown {
    console.log('IsExpPipe', value);
    return value > max;
  }

}
