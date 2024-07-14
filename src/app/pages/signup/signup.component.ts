import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(
    private userService: UserService,
    private snack: MatSnackBar,
    private router: Router
  ) { }

  public user = {
    name: '',
    role: '',
    username: '',
    password: '',
    cnf_password: ''
  };

  toast = Swal.mixin({
    toast: true,
    position: "center",
    showConfirmButton: false,
    timer: 5000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    }
  });

  ngOnInit(): void {

  }
  onSubmit() {
    if (
      this.user.name.trim() == '' ||
      this.user.name == null
    ) {
      this.snack.open('Name is required', '', {
        duration: 3000,
      });
      return;
    }
    if (
      this.user.role.trim() == '' ||
      this.user.role == null
    ) {
      this.snack.open('Role is required', '', {
        duration: 3000,
      });
      return;
    }
    if (
      this.user.username.trim() == '' ||
      this.user.username == null
    ) {
      this.snack.open('Username is required', '', {
        duration: 3000,
      });
      return;
    }
    if (
      this.user.password.trim() == '' ||
      this.user.password == null
    ) {
      this.snack.open('Password is required!', '', {
        duration: 3000,
      });
      return;
    }
    if (
      this.user.cnf_password.trim() == '' ||
      this.user.cnf_password == null
    ) {
      this.snack.open('Confirm password is required!', '', {
        duration: 3000,
      });
      return;
    }
    if (this.user.password.trim() == this.user.cnf_password.trim()) {
      console.log("Signup form data: ", this.user);
      this.userService.signupUser(this.user).subscribe(response => {
        Swal.fire("Signup Success!", "Click ok for login.", "success").then((result) => {
          if (result.isConfirmed) {
            console.log("Response: ", response);
            this.router.navigate(['/login']);
          } else {
            Swal.fire("Signup Fail!", "Something went wrong.", "info");
          }
        });
      });
    }
    else {
      this.snack.open('Password and confirm password is not maching', '', {
        duration: 3000,
      });
      return;
    }
  }

}

