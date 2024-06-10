import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-proposal-submission',
  templateUrl: './proposal-submission.component.html',
  styleUrls: ['./proposal-submission.component.css']
})
export class ProposalSubmissionComponent implements OnInit {

  @Input()
  projectInformationData: {
    projectTitle?: string,
    projectCategory?: string,
    projectDescription?: string,
    projectSubmsnType?: string,
    projectDuration?: string,
    amountRequested?: string,
    timeline?: {
        start_date?: string,
        end_date?: string
        }
  } = {};
  
//   @Input() 
//   piInformation : {
//     name?: string,
//     desination?: string,
//     qualification?: string,
//     institution?: string,
//     department?: string,
//     gender?: string,
//     email?: string,
//     mobile?: string,
//     dataOfBirth?: string,
//     address?: string
//  } = {};

   
//  @Input() 
//  coPiInformation : {
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

// @Input() 
// uploadAttachments :  {
//   projectSummary?: string,
//   projectBudget?: string,
//   other?: string
// } = {};

  // projectProposalObj : any = {
  //   "projectInformation" : {
  //   "ProjectTitle": "",
  //   "ProjectCategory": "",
  //   "ProjectDescription": "",
  //   "ProjectSubmsnType": "",
  //   "ProjectDuration": "",
  //   "AmountRequested":"",
  //   "timeline": {
  //           "start_date": "",
  //           "end_date": "",
  //           }
  //   },
    
  //   "piInformation" : {
    
  //      "name": "",
  //      "desination": "",
  //      "qualification": "",
  //      "institution": "",
  //      "department": "",
  //      "gender": "",
  //      "email": "",
  //      "mobile": "",
  //      "dataOfBirth": "",
  //      "address": ""
  //   },
  //   "coPiInformation" : {
    
  //      "name": "",
  //      "desination": "",
  //      "qualification": "",
  //      "institution": "",
  //      "department": "",
  //      "gender": "",
  //      "email": "",
  //      "mobile": "",
  //      "dataOfBirth": "",
  //      "address": ""
    
    
  //   },
  //   "uploadAttachments": [
  //           {
  //               "fileName": "",
  //               "fileType": "",
  //               "fileSize": "",
  //               "uploadDate": ""
  //           },
  //           {
  //               "fileName": "",
  //               "fileType": "",
  //               "fileSize": "",
  //               "uploadDate": ""
  //           },
  //           {
  //               "fileName": "",
  //               "fileType": "",
  //               "fileSize": "",
  //               "uploadDate": ""
  //           }
  //       ]
    
  //   }


  
  constructor() { }

  ngOnInit(): void {
    console.log(this.projectInformationData)
  }
  

}
