import { outputAst } from '@angular/compiler';
import { OnChanges, SimpleChanges } from '@angular/core';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-string-list',
  templateUrl: './string-list.component.html',
  styleUrls: ['./string-list.component.scss']
})
export class StringListComponent implements OnInit, OnChanges {
  @Input() items: string[];
  @Input() selectedItem: string | null = null;
  @Output() itemSelected = new EventEmitter<string>();
  
  constructor() { }

  ngOnInit(): void {
    // console.log('OnInit');
  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log('OnChanged', changes);
  }

  setSelected(item: string) {
    this.itemSelected.emit(item);
  }

}
