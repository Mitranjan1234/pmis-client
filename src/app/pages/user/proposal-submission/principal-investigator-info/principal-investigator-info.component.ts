import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal-investigator-info',
  templateUrl: './principal-investigator-info.component.html',
  styleUrls: ['./principal-investigator-info.component.css']
})
export class PrincipalInvestigatorInfoComponent implements OnInit {

  piInformation = {
   "name": "",
   "desination": "",
   "qualification": "",
   "institution": "",
   "department": "",
   "gender": "",
   "email": "",
   "mobile": "",
   "dataOfBirth": "",
   "address": ""
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
