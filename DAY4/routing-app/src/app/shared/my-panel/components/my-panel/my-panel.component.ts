import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-panel',
  templateUrl: './my-panel.component.html',
  styleUrls: ['./my-panel.component.scss']
})
export class MyPanelComponent implements OnInit {

  @Input() title = '';
  constructor() { }

  ngOnInit(): void {
  }

}
