import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BehaviorSubject, combineLatest, debounceTime, filter, interval, map, Observable, pipe, shareReplay, Subscribable, Subscription, switchMap, tap, withLatestFrom } from 'rxjs';
import { SearchService } from './services/search-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  readonly selectedIndex$ = new BehaviorSubject<number>(0);
  readonly selectedItem$: Observable<string>;
  items$: Observable<string[]>
  readonly searchControl = new FormControl<string>('');
  readonly len$: Observable<number> = this.searchControl.valueChanges.pipe(map(x => x.length));
  simpleItems = ['Wow', 'Chwow', 'Slow'];
  isBusy = false;
  sub: Subscription;

  constructor(private searchService: SearchService) {
    const validValue$ = this.searchControl.valueChanges.pipe(
      filter(x => x.length > 2));

    this.items$ = validValue$.pipe(
      tap(_ => this.isBusy = true),
      switchMap(value => this.searchService.search(value)),
      shareReplay(1),
      tap(results => {
        this.isBusy = false;
      })
    );

    this.selectedItem$ = this.selectedIndex$.pipe(withLatestFrom(this.items$)).pipe(
      map(([index, items]) => items[index])
    );

    // this.selectedItem$ = combineLatest([this.selectedIndex$, this.items$]).pipe(
    //   map(([index, items]) => {
    //     return items[index];
    //   }));

  }

  ngOnInit(): void {
  }

  startPlay() {
    this.sub = interval(1000)
      .pipe(withLatestFrom(this.items$))
      .subscribe(([_, items]) => {
        const currentIndex = this.selectedIndex$.value;
        if (currentIndex < items.length - 1) {
          this.selectedIndex$.next(currentIndex + 1);
        } else {
          this.selectedIndex$.next(0);
        }
      });
  }

  stopPlay() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

  addItem() {
    //this.simpleItems.push('NEW ITEM');
    this.simpleItems = [...this.simpleItems, 'NEW ITEM'];
  }
  setSelected(item: number): void {
    this.selectedIndex$.next(item);
  }
}
