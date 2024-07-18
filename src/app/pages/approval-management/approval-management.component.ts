import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { ApprovalService } from 'src/app/services/approval.service';
import { ProposalService } from 'src/app/services/proposal.service';
import Swal from 'sweetalert2';

export interface Approvals {
  propId: string,
  status:string,
  projectTitle: string,
  projectCategory: string,
  projectSubmsnType : string,
  projectDuration:string,
  amountRequested : string,
}
@Component({
  selector: 'app-approval-management',
  templateUrl: './approval-management.component.html',
  styleUrls: ['./approval-management.component.css']
})
export class ApprovalManagementComponent implements AfterViewInit {
  approvalsList !: Approvals[];
  dataSource: any;
  constructor(public approvalService: ApprovalService, private proposalService: ProposalService) {
    this.fetchApprovalsData();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  fetchApprovalsData() {
    this.approvalService.getAllApprovals().subscribe((response: any) => {
    this.approvalsList=response;
    this.dataSource = new MatTableDataSource<Approvals>(this.approvalsList);
    this.dataSource.paginator=this.paginator;
    this.dataSource.sort=this.sort;
    })
}

onApprove(projectId: any) {
  Swal.fire({
    title: "Are you sure?",
    text: "You want to approve this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "Green",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, Approve it!"
  }).then((result) => {
    if (result.isConfirmed) {
      this.proposalService.approveProposal(projectId).subscribe(response => {
        Swal.fire({
          title: "Approve!",
          text: "Proposal has been approved.",
          icon: "success"
        });
      });
    }
  });
}

onReject(projectId: any) {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to reject this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, Reject it!"
  }).then((result) => {
    if (result.isConfirmed) {
      this.proposalService.rejectProposal(projectId).subscribe(response => {
        Swal.fire({
          title: "Rejected!",
          text: "Proposal has been rejected.",
          icon: "success"
        });
      });
    }
  });
}

onApprovalView(projectId: any) {
  this.proposalService.getProposalDataById(projectId).subscribe(response => {
        Swal.fire("Success!","<b>View Proposal Data:</b> <br>"+JSON.stringify(response), "success");
  });
}

displayedColumns: string[] = ['propId','title', 'category', 'submissionType','amount','duration','status','action'];
@ViewChild(MatPaginator) paginator!: MatPaginator;
@ViewChild(MatSort) sort!: MatSort;

}
