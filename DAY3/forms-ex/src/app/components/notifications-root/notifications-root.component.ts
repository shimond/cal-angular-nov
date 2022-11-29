import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { NotificationModel } from 'src/app/model/product.model';
import { NotificationsService } from 'src/app/services/notifications.service';

@Component({
  selector: 'app-notifications-root',
  templateUrl: './notifications-root.component.html',
  styleUrls: ['./notifications-root.component.scss']
})
export class NotificationsRootComponent implements OnInit {

  notifications$: Observable<NotificationModel[]>;
  warnings$: Observable<NotificationModel[]>;
  errors$: Observable<NotificationModel[]>;
  infos$: Observable<NotificationModel[]>;
  constructor(private notificationsService: NotificationsService) { }

  ngOnInit(): void {
    this.notifications$ = this.notificationsService.notifications$;
    this.warnings$ = this.notifications$.pipe(
      map(array => array.filter(item => item.type === 'WARINING')));

    this.errors$ = this.notifications$.pipe(
      map(array => array.filter(item => item.type === 'ERROR')));

    this.infos$ = this.notifications$.pipe(
      map(array => array.filter(item => item.type === 'INFO')));

  }

}
