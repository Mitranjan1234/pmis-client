import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';

export interface Audience {
  "name": string,
  "userId": string,
  "role" : string,
  "status" : string,
}

export interface contact_details {
  name : string,	
  email:string,	
  pass:string,	
}

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.css']
})

export class ManageUsersComponent implements AfterViewInit {
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  displayedColumns: string[] = ['name', 'userId','role','status','action'];
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
    "name": "Amit",
    "userId": "1",
    "role" :"dsf",
    "status" :"dsf",
   
  },
  {
    "name": "Ram",
    "userId": "3",
    "role" :"dsf",
    "status" :"dsf",
   
  },
  {
    "name": "Bittu",
    "userId": "4",
    "role" :"dsf",
    "status" :"dsf",
   
  },
  {
    "name": "Golu",
    "userId": "6",
    "role" :"dsf",
    "status" :"dsf",
   
  },
  {
    "name": "Anil",
    "userId": "2",
    "role" :"dsf",
    "status" :"dsf",
   
  },
  {
    "name": "Mohan",
    "userId": "5",
    "role" :"dsf",
    "status" :"dsf",
   
  },
  {
    "name": "Karan",
    "userId": "7",
    "role" :"dsf",
    "status" :"dsf",
   
  },
  {
    "name": "Manoj",
    "userId": "8",
    "role" :"dsf",
    "status" :"dsf",
   
  },
  {
    "name": "Praveen",
    "userId": "9",
    "role" :"dsf",
    "status" :"dsf",
   
  },
  {
    "name": "Rohit",
    "userId": "10",
    "role" :"dsf",
    "status" :"dsf",
   
  }
]