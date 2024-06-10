import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';

export interface Audience {
  "name": string,
  "userId": string,
  "role" : string,
  "status" : string,
  "submissionType":string,
}

@Component({
  selector: 'app-approval-management',
  templateUrl: './approval-management.component.html',
  styleUrls: ['./approval-management.component.css']
})
export class ApprovalManagementComponent implements AfterViewInit {

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  displayedColumns: string[] = ['name', 'userId', 'submissionType','role','status','action'];
  dataSource = new MatTableDataSource<Audience>(USERS_DATA);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;
  contact_details: any;
contacts: any;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}
const USERS_DATA: Audience[] = [
  {
    "name": "Artificial Intelligence for Social Impact: Leveraging AI for Positive Change",
    "userId": "Technology Development",
    "role" :"10000000",
    "status" :"36",
    "submissionType": "New Proposal"
  }
]
