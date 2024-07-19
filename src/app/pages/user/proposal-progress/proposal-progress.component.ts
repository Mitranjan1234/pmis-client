import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProposalService } from 'src/app/services/proposal.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-proposal-progress',
  templateUrl: './proposal-progress.component.html',
  styleUrls: ['./proposal-progress.component.css']
})
export class ProposalProgressComponent implements OnInit {
  ngOnInit(): void {
  }
  proposalProgress =  {
    "propId":"",
    "progressReport": "",
    "utilizationReport": "",
    "closerReport": "",
    "planningDate":"",
    "planningStatus":"",
    "designDate":"",
    "designStatus":"",
    "developmentDate":"",
    "developmentStatus":"",
    "testingDate":"",
    "testingStatus":"",
    "finalReviewDate":"",
    "finalReviewStatus":"",
}
 
selectedFile: File | null = null;
uploadProgress: number | null = null;

constructor(private proposalService: ProposalService,private snack: MatSnackBar) { }

onFileSelected(event: any) {
  if (event.target.files.length > 0) {
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile);   
  }
}
onUpload() {
  if (this.selectedFile) {
    this.proposalService.uploadfile(this.selectedFile).subscribe(response => {
      Swal.fire("Success!","<b>Selected file " +this.selectedFile?.name+ " uploaded successfully.</b>", "success");
  });
  } 
  else {
    Swal.fire("Alert!","Please select a file", "warning");
  }
}

onProposalProgSubmit() {
  if (
    this.proposalProgress.propId.trim() == '' ||
    this.proposalProgress.propId == null
  ) {
    this.snack.open('Project id is required', '', {
      duration: 3000,
    });
  }
  else{
    this.proposalService.proposalProgressSubmit(this.proposalProgress).subscribe(response => {
      Swal.fire("Success!", "Proposal progress submitted sussccessfully.", "success").then((result) => {
    
      });
    });
  }
  
}
  



}
