import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isAuthSubject = new BehaviorSubject<boolean>(false);
  readonly isAuth$ = this.isAuthSubject.asObservable();

  constructor(private router: Router) { }

  login() {
    this.isAuthSubject.next(true);
  }

  logout() {
    this.isAuthSubject.next(false);
    this.router.navigate(['/login']);
  }
}
