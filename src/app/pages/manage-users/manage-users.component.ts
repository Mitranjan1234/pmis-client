import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { UserService } from 'src/app/services/user.service';

export interface Audience {
  name: string,
  username: string,
  role : string,
  status : string,
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
  constructor(public userService: UserService) {
    // this.userService.getAllUsers().subscribe((response: any) => {
    //   console.log("Load data");
    //   res=response
    //   //console.log(JSON.stringify(response));
    //   //USERS_DATA.push(response)
    //   });
  }
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
    name: "Amit",
    username: "amit.k@gmail.com",
    role :"Project PI",
    status :"Active",
   
  },
 
  {
    "name": "Mitranjan",
    "username": "mitranjan.k@gmail.com",
    "role" :"CWDB personnels",
    "status" :"Active",
   
  },
  {
    "name": "Ravi",
    "username": "ravi.k@gmail.com",
    "role" :"Project PI",
    "status" :"Active",
   
  },
  {
    "name": "Nilesh",
    "username": "nilesh.k@gmail.com",
    "role" :"CWDB personnels",
    "status" :"Active",
   
  },
  {
    "name": "Kamlesh",
    "username": "kamlesh.k@gmail.com",
    "role" :"Project PI",
    "status" :"Active",
   
  },
  {
    "name": "Sukesh",
    "username": "sukesh.k@gmail.com",
    "role" :"CWDB personnels",
    "status" :"Active",
   
  }
  
]