import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';
export interface Audience {
  name: string,
  username: string,
  role : string,
  status : string,
}

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.css']
})

export class ManageUsersComponent implements AfterViewInit {
  usersList !: Audience[];
  dataSource: any;
  constructor(public userService: UserService) {
    this.fetchUserData();
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
  
  fetchUserData (){
    this.userService.getAllUsers().subscribe((response: any) => {
         this.usersList=response;
         this.dataSource = new MatTableDataSource<Audience>(this.usersList);
         this.dataSource.paginator=this.paginator;
         this.dataSource.sort=this.sort;
         })
  }
  onDeleteUser(username: any) {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to delete this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        this.userService.deleteUserByUsername(username).subscribe(response => {
          Swal.fire({
            title: "Deleted!",
            text: "User has been deleted.",
            icon: "success"
          });
        });
      }
    });
  }
  displayedColumns: string[] = ['name', 'username','role','status','action'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
}
