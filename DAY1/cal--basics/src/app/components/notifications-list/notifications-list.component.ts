import { Component, Input, OnInit } from '@angular/core';
import { NotificationModel } from 'src/app/model/product.model';

@Component({
  selector: 'app-notifications-list',
  templateUrl: './notifications-list.component.html',
  styleUrls: ['./notifications-list.component.scss']
})
export class NotificationsListComponent implements OnInit {

  @Input() items: NotificationModel[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
