import { Injectable } from '@angular/core';
import { delay, map, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  validateUserName(value: string): Observable<boolean> {
    console.log('validateUserName');
    return this.httpClient.get<string[]>('https://localhost:7080/search/' + value).pipe(
      map(l => l.length > 100),
      delay(2000));
  }

  constructor(private httpClient: HttpClient) { }
}
