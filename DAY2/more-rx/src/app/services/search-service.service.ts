import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  search(text: string): Observable<string[]> {
    return this.http.get<string[]>('https://localhost:7080/search/' + text);
  }

  constructor(private http: HttpClient) { }
}
