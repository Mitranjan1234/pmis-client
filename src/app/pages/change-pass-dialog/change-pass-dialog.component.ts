import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-change-pass-dialog',
  templateUrl: './change-pass-dialog.component.html',
  styleUrls: ['./change-pass-dialog.component.css']
})
export class ChangePassDialogComponent implements OnInit {
  changePassData = {
    oldPassword: '',
    newPassword: '',
    confPassword: ''
  };
  constructor(private userService: UserService) { }

  ngOnInit(): void { }
  onSubmit() {
    console.log("changePassData:", this.changePassData);
    alert("Change password form is submitting");
    this.userService.forgotUserPassword(this.changePassData).subscribe(response => {
      alert(response);
    });

    throw new Error('Method not implemented.');
  }
  onCloseClick() {
    throw new Error('Method not implemented.');
  }
  onNoClick() {
    throw new Error('Method not implemented.');
  }



}
