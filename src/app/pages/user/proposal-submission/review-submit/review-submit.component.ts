import { Component, Input, OnInit } from '@angular/core';
import { ProposalService } from 'src/app/services/proposal.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-review-submit',
  templateUrl: './review-submit.component.html',
  styleUrls: ['./review-submit.component.css']
})
export class ReviewSubmitComponent implements OnInit {
  projectInformationData: any
  piInformation: any
  coPiInformation:any
  uploadAttachments: any
  //proposalData: Array<string> | undefined;
  proposalData = new Map();
  constructor(private proposalService: ProposalService) { }

  ngOnInit(): void {
    this.projectInformationData= localStorage.getItem("projectInformationData")
    this.piInformation= localStorage.getItem("piInformation")
    this.coPiInformation= localStorage.getItem("coPiInformation")
    this.uploadAttachments= localStorage.getItem("uploadAttachments")
  }

  onSubmit(){
    this.proposalData.set("projectInformationData",this.projectInformationData);
    this.proposalData.set("piInformation",this.piInformation);
    this.proposalData.set("coPiInformation",this.coPiInformation);
    this.proposalData.set("uploadAttachments",this.uploadAttachments);

    const proposalObject = Object.fromEntries(this.proposalData);
    //alert(JSON.stringify(proposalObject))
    this.proposalService.submitProposal(proposalObject).subscribe(response => {
      //alert(this.proposalData.get("projectInformationData"))
      Swal.fire("Submission Success!", "Please note: "+JSON.stringify(response)+ " <br>Details has been sent to your email.", "success").then((result) => {
        if (result.isConfirmed) {
          console.log("Response: ", response);
         // window.location.href = '/login';
        } else {
          Swal.fire("Submission Fail!", "Something went wrong.", "info");
        }
      });
    });
  }
}
