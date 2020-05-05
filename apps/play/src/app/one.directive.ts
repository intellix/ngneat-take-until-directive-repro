import { Directive } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { interval } from 'rxjs';

@UntilDestroy()
@Directive({
  selector: '[playOne]'
})
export class OneDirective {
  constructor() {
    interval(1000).pipe(untilDestroyed(this)).subscribe(console.log);
  }
}
