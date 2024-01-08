import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginService } from 'src/app/services/login.service';
import { ChangePassDialogComponent } from '../change-pass-dialog/change-pass-dialog.component';
export interface DialogData {
  animal: string;
  name: string;
}
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {

  user = {
    name: '',
    role: '',
    username: ''
  };
  animal: any;
  name: any;
  constructor(private login: LoginService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.user = this.login.getUser()
  }
  changePasswordDialog() {
    const dialogRef = this.dialog.open(ChangePassDialogComponent, {
      width: '400px',
      height: '400px'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

}
