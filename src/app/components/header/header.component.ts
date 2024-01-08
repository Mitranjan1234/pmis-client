import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLoggedIn = false;
  user = {
    name: '',
    role: '',
    username: ''
  };
  constructor(public login: LoginService) { }

  ngOnInit(): void {
    this.login.loginStatusSubject.asObservable().subscribe((data) => {
      this.isLoggedIn = this.login.isLoggedIn();
      this.user = this.login.getUser();
    });
  }
  public logout() {
    this.login.logout();
    window.location.reload();
    this.login.loginStatusSubject.next(false);
  }

}