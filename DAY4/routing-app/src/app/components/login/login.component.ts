import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  readonly isAuth$ = this.authService.isAuth$;
  
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  doLogin() {
    this.authService.login();
  }

  doLogout() {
    this.authService.logout();
  }

}
