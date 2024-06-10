import { Component, Input, OnInit } from '@angular/core';

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
//    @Input() 
//    coPiInformation : {
//    name?: string,
//    desination?: string,
//    qualification?: string,
//    institution?: string,
//    department?: string,
//    gender?: string,
//    email?: string,
//    mobile?: string,
//    dataOfBirth?: string,
//    address?: string
// } = {};

  constructor() { }

  ngOnInit(): void {
    console.log(this.coPiInformation.name)
  }
  onSave(): void {  
    console.log(this.coPiInformation)
    localStorage.setItem('coPiInformation', JSON.stringify(this.coPiInformation));
  }

}
