import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  forgotPassData = {
    username: ''
  };
  constructor(
    private userService: UserService,
    private router: Router,
    private snack: MatSnackBar) { }

  ngOnInit() {
  }

  onSubmit() {
    if (
      this.forgotPassData.username.trim() == '' ||
      this.forgotPassData.username == null
    ) {
      this.snack.open('Username is required!', '', {
        duration: 3000,
      });
      return;
    }
    console.log("Username:", this.forgotPassData);
    this.userService.forgotUserPassword(this.forgotPassData).subscribe((response: any) => {
      Swal.fire("Mail sent Success!", response.message, "success").then((result) => {
        if (result.isConfirmed) {
          this.router.navigate(['/login']);
        } else {
          Swal.fire("Signup Fail!", "Something went wrong.", "info");
        }
      });
    }
    );
  }

}
