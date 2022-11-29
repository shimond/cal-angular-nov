import { Injectable } from '@angular/core';
import { BehaviorSubject, timer, interval } from 'rxjs';
import { NotificationModel } from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  private notificationsSubject = new BehaviorSubject<NotificationModel[]>([]);
  notifications$ = this.notificationsSubject.asObservable();


  constructor() {
    const arr: NotificationModel[] = [
      { type: 'INFO', message: 'M1' },
      { type: 'WARINING', message: 'M2' },
      { type: 'INFO', message: 'M3' },

      { type: 'WARINING', message: 'M4' },
      { type: 'INFO', message: 'M5' },
      { type: 'ERROR', message: 'M6' },

      { type: 'INFO', message: 'M6' },
      { type: 'ERROR', message: 'M6' },
      { type: 'INFO', message: 'M6' },
    ];

    this.notificationsSubject.next(arr);

    interval(1000).subscribe(o => {
      const current = this.notificationsSubject.value;
      let item: NotificationModel = { type: 'INFO', message: 'M' + o }
      if (o % 3 == 0) {
        item.type = 'WARINING';
      }
      else if (o % 2 == 0) {
        item.type = 'ERROR';
      }
      const send = [...current, item];
      console.log(send);
      this.notificationsSubject.next(send);
    });
  }
}
