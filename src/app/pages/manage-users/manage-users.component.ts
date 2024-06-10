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
    "userId": "amit.k@gmail.com",
    "role" :"Project PI",
    "status" :"Active",
   
  },
  {
    "name": "Mitranjan",
    "userId": "mitranjan.k@gmail.com",
    "role" :"CWDB personnels",
    "status" :"Active",
   
  },
  {
    "name": "Ravi",
    "userId": "ravi.k@gmail.com",
    "role" :"Project PI",
    "status" :"Active",
   
  },
  {
    "name": "Nilesh",
    "userId": "nilesh.k@gmail.com",
    "role" :"CWDB personnels",
    "status" :"Active",
   
  },
  {
    "name": "Kamlesh",
    "userId": "kamlesh.k@gmail.com",
    "role" :"Project PI",
    "status" :"Active",
   
  },
  {
    "name": "Sukesh",
    "userId": "sukesh.k@gmail.com",
    "role" :"CWDB personnels",
    "status" :"Active",
   
  }
  
]