import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, filter, interval, map, Observable, of, shareReplay, startWith, switchMap, tap, withLatestFrom } from 'rxjs';
import { CountService } from './services/count.service';
import { SearchService } from './services/search-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  readonly selectedIndex$: Observable<number>;
  readonly items$: Observable<string[]>
  readonly searchControl = new FormControl<string>('');
  readonly len$: Observable<number> = this.searchControl.valueChanges.pipe(map(x => x.length));
  simpleItems = ['Wow', 'Chwow', 'Slow'];
  isBusy = false;

  constructor(private searchService: SearchService) {
    const validValue$ = this.searchControl.valueChanges.pipe(
      filter(x => x.length > 2));

    this.selectedIndex$ = interval(1000).pipe(withLatestFrom(this.items$)).pipe(map(([_, items]) => 8));
    this.items$ = validValue$.pipe(
      tap(_ => this.isBusy = true),
      switchMap(value => this.searchService.search(value)),
      shareReplay(1),
      tap(results => {
        this.isBusy = false;
      })
    );
  }

  ngOnInit(): void {

    const obs = new Observable((observer => {
      observer.next('Message1');
      observer.next('Message2');

      setTimeout(() => {
        observer.next('Message3');
        observer.error({errorMessage :'Failed to blabla'});
        observer.next('After complete');
        console.log('AFTER COMPLETE IN OBS');
      }, 2000);
    }));

    obs.subscribe({
      next: message => console.log(message),
      complete: () => console.log('Obs Completee'),
      error: (error) => console.error('ERROR', error)
    });

    setTimeout(() => {
      obs.subscribe({
        next: message => console.log('2:'+  message),
        complete: () => console.log('2:Obs Completee'),
        error: (error) => console.error('2:ERROR', error)
      });
    },5000);
  }

  startPlay() {
  }

  stopPlay() {

  }

  addItem() {
    //this.simpleItems.push('NEW ITEM');
    this.simpleItems = [...this.simpleItems, 'NEW ITEM'];
  }
  setSelected(item: string): void {
    if (item.includes('2')) {
      alert('Cannot select item 2');
    }
    else {
      // this.selectedItem = item;
    }
  }
}
