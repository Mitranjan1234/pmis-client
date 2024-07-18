import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fund-management',
  templateUrl: './fund-management.component.html',
  styleUrls: ['./fund-management.component.css']
})
export class FundManagementComponent implements OnInit {
  projectFund =  {
    "propId": ""
  }
  currentDate = new Date();
  constructor() { }
  ngOnInit() {
  }

  onSubmit(){}

}
