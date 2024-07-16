import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProposalService } from 'src/app/services/proposal.service';
@Component({
  selector: 'app-track-proposal',
  templateUrl: './track-proposal.component.html',
  styleUrls: ['./track-proposal.component.css']
})
export class TrackProposalComponent implements OnInit {
  public trackingDetails = {
    trackId: ''
  };
  constructor(private snack: MatSnackBar,private proposalService: ProposalService,) { }

  ngOnInit(): void {
  }  
  onSubmit() {
    if (
      this.trackingDetails.trackId.trim() == '' ||
      this.trackingDetails.trackId == null
    ) {
      this.snack.open('Tracking id is required', '', {
        duration: 3000,
      });
    }
    this.proposalService.trackProposal(this.trackingDetails).subscribe(response => {
          Swal.fire("Success!", JSON.stringify(response), "success");
    });
  }
  

  

}
