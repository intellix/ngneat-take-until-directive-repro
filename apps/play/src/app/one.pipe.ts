import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'one'
})
export class OnePipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }
}
