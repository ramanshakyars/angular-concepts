import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverseString',
  standalone: true
})
export class ReverseStringPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): string {
    if (typeof value !== 'string') {
      return value; // Return the original value if it's not a string
    }
    return value.split('').reverse().join('');
  }

}
