import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-reset-pass-dialog',
  templateUrl: './reset-pass-dialog.component.html',
  styleUrls: ['./reset-pass-dialog.component.css']
})
export class ResetPassDialogComponent implements OnInit {
  passData = {
    password: '',
    token: ''
  };
  token = null;
  constructor(
    public userService: UserService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void { }
  onSubmit() {
    this.activatedRoute.queryParams.subscribe(params => {
      const token = params['token'];
      this.passData.token = token;
      console.log(token);

    });
    console.log("Username:", this.passData);
    console.log("reset Form Submitted: ");
    alert("Form Submitting: ");
    this.userService.resetUserPassword(this.passData).subscribe(response => {
      alert(response);
    });
  }
}
