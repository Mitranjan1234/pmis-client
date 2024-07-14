import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  // add user function
  public signupUser(userSingup: any) {
    return this.http.post(`${baseUrl}/user/signup`, userSingup)
  }
  // Login user function
  public loginUser(user: any) {
    return this.http.post(`${baseUrl}/user/login`, user)
  }

  // forgot password
  public forgotUserPassword(username: any) {
    console.log("username from forgotUserPassword", username)
    return this.http.post(`${baseUrl}/user/forgot-password`, username)
  }

  //resetUserPassword
  public resetUserPassword(resetUserPassData: any) {
    console.log("username from resetUserPassData", resetUserPassData)
    return this.http.post(`${baseUrl}/user/reset-password`, resetUserPassData)
  }

  // get all users
  public getAllUsers() {
    return this.http.post(`${baseUrl}/user/getUsers`,null);
  }

}
