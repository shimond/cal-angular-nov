import { Input,  Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  @Input() test: any;
  constructor() { }

  ngOnInit(): void {
    this.test.name =  'lajdlkajskdjsad';
  }

}
