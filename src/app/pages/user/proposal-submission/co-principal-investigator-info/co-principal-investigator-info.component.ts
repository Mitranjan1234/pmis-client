import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-co-principal-investigator-info',
  templateUrl: './co-principal-investigator-info.component.html',
  styleUrls: ['./co-principal-investigator-info.component.css']
})
export class CoPrincipalInvestigatorInfoComponent implements OnInit {

  coPiInformation = {
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
