import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { LoginService } from 'src/app/services/login.service';
import { MatDialog } from '@angular/material/dialog';
import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginData = {
    username: '',
    password: '',
  };

  constructor(
    private loginService: LoginService,
    private userService: UserService,
    private router: Router,
    public dialog: MatDialog,
    private snack: MatSnackBar
  ) { }

  ngOnInit(): void { }

  onSubmit() {
    console.log('login btn clicked');

    if (
      this.loginData.username.trim() == '' ||
      this.loginData.username == null
    ) {
      this.snack.open('Username is required!', '', {
        duration: 3000,
      });
      return;
    }

    if (
      this.loginData.password.trim() == '' ||
      this.loginData.password == null
    ) {
      this.snack.open('Password is required!', '', {
        duration: 3000,
      });
      return;
    }

    this.userService.loginUser(this.loginData).subscribe((response: any) => {
      console.log(response.user.role);
      this.loginService.setLoginUserToken(response.token);
      this.loginService.setUser(response.user);
      //redirect ...ADMIN: admin-dashboard
      //redirect ...NORMAL:normal-dashboard
      if (response.user.role == 'CWDB personnel') {
        //admin dashboard
        this.router.navigate(['admin']);
        this.loginService.loginStatusSubject.next(true);
      } else if (response.user.role == 'Project PI') {
        //normal user dashbaord
        this.router.navigate(['user-dashboard/home']);
        this.loginService.loginStatusSubject.next(true);
      } else {
        this.loginService.logout();
      }
    });
  }

  forgotPasswordDialog() {
    const dialogRef = this.dialog.open(ForgotPasswordComponent, {
      width: '400px',
      height: '400px'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      //this.animal = result;
    });
  }
}
