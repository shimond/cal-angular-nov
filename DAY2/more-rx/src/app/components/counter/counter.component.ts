import { Component, OnDestroy, OnInit } from '@angular/core';
import { filter, map, Observable, Subscription } from 'rxjs';
import { CountService } from 'src/app/services/count.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit, OnDestroy {

  subs = new Subscription();
  count$: Observable<number>;

  constructor(private counterService: CountService) { }

  ngOnInit(): void {
    this.count$ = this.counterService.counter$.pipe(
      filter(o => o % 2 == 0),
      map(x => x * 10));
  }

  plus() {
    this.counterService.plus();
  }

  minus() {
    this.counterService.minus();
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }


}
