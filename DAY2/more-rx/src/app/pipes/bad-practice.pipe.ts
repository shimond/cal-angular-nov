import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'badPractice'
})
export class BadPracticePipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    console.log('BadPracticePipe');
    return value.length;
  }

}
