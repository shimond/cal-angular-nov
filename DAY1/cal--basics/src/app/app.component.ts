import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CountService } from './services/count.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'cal--basics';
  count$ : Observable<number>;
  showAll = false;
  constructor(private counterService: CountService) {

  }
  ngOnInit(): void {
    this.count$ = this.counterService.counter$;
  }

}
