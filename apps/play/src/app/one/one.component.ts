import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { untilDestroyed, UntilDestroy } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'play-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {

  constructor() {
    interval(1000).pipe(untilDestroyed(this)).subscribe(console.log);
  }

  ngOnInit(): void {
  }

}
