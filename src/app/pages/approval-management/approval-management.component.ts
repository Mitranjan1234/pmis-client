import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { ApprovalService } from 'src/app/services/approval.service';

export interface Approvals {
  title: string,
  category: string,
  submissionType : string,
  amount : string,
  status:string,
}

@Component({
  selector: 'app-approval-management',
  templateUrl: './approval-management.component.html',
  styleUrls: ['./approval-management.component.css']
})
export class ApprovalManagementComponent implements AfterViewInit {
  approvalsList !: Approvals[];
  dataSource: any;
  constructor(public approvalService: ApprovalService) {
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

displayedColumns: string[] = ['title', 'category', 'submissionType','amount','status','action'];
@ViewChild(MatPaginator) paginator!: MatPaginator;
@ViewChild(MatSort) sort!: MatSort;

}
// const USERS_DATA: Audience[] = [
//   {
//     "name": "Artificial Intelligence for Social Impact: Leveraging AI for Positive Change",
//     "userId": "Technology Development",
//     "role" :"10000000",
//     "status" :"36",
//     "submissionType": "New Proposal"
//   }
// ]
