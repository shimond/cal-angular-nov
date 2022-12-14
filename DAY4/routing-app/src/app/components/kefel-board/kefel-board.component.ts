import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-kefel-board',
  templateUrl: './kefel-board.component.html',
  styleUrls: ['./kefel-board.component.scss']
})
export class KefelBoardComponent implements OnInit, OnDestroy {

  readonly size$ = this.activetedRoute.queryParams.pipe(map(qa => qa['size'] || 5));
  readonly values$ = this.size$.pipe(map(size => this.createBoard(size)));


  constructor(private readonly activetedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    // this.activetedRoute.queryParams.subscribe(qp => {
    //   this.size = qp['size'] || 5;
    //   for (let indexI = 1; indexI <= this.size; indexI++) {
    //     for (let indexJ = 1; indexJ <= this.size; indexJ++) {
    //       this.values.push({ x: indexI, y: indexJ });
    //     }
    //   }
    // });


  }

  createBoard(size: number) {
    const values: { x: number, y: number }[] = [];
    for (let indexI = 1; indexI <= size; indexI++) {
      for (let indexJ = 1; indexJ <= size; indexJ++) {
        values.push({ x: indexI, y: indexJ });
      }
    }
    return values;
  }


  ngOnDestroy(): void {
    console.log('KEFEL ngOnDestroy');
  }

}
