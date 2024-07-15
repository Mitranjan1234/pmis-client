import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class ApprovalService {

 constructor(private http: HttpClient) { }
 // get all approvals
 public getAllApprovals() {
    return this.http.post(`${baseUrl}/approval/getAllApprovals`,null);
  }
}    
 