import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-kefel-result',
  templateUrl: './kefel-result.component.html',
  styleUrls: ['./kefel-result.component.scss']
})
export class KefelResultComponent implements OnInit {
  readonly result$ = this.activatedRoute.params.pipe(map(ps => +ps['xValue'] * +ps['yValue']));

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    // this.activatedRoute.params.pipe(map(ps => ({ x: +ps['xValue'], y: +ps['yValue'] })))
    // .subscribe(numbers=>
    //     {
    //       this.result = numbers.x * numbers.y;
    //     }
    //   )
  }

}
