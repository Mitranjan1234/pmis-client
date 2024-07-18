import { Component, OnInit } from '@angular/core';
import { ProposalService } from 'src/app/services/proposal.service';
import Swal from 'sweetalert2';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-progress-report',
  templateUrl: './progress-report.component.html',
  styleUrls: ['./progress-report.component.css']
})
export class ProgressReportComponent implements OnInit {

  constructor(private snack: MatSnackBar, private proposalService:ProposalService) { }

  ngOnInit() {
  }
  currentDate = new Date();
  progressReport =  {
    "propId": ""
  }

  onSubmit(){
    if (
      this.progressReport.propId.trim() == '' ||
      this.progressReport.propId == null
    ) {
      this.snack.open('Project id is required', '', {
        duration: 3000,
      });
    }
    this.proposalService.getProjectProgress(this.progressReport).subscribe(response => {
          Swal.fire("Success!","<b>Project Progress Data</b><br>"+ JSON.stringify(response), "success");
    });
  }
}
