import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';

export interface Audience {
  MEM_NUM : string,	
  ORIG_AIRPORT_CD:string,	
  DEST_AIRPORT_CD:string,	
}

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.css']
})

export class ManageUsersComponent implements AfterViewInit {

  displayedColumns: string[] = ['Name', 'Gender', 'Date of Birth','Role','Status','Edit','View'];
  dataSource = new MatTableDataSource<Audience>(ELEMENT_DATA);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

const ELEMENT_DATA: Audience[] = [
  {
    "MEM_NUM": "LTW3036",
    "ORIG_AIRPORT_CD": "DFW",
    "DEST_AIRPORT_CD": "BOS",
  },
  {
    "MEM_NUM": "SRT3166",
    "ORIG_AIRPORT_CD": "DFW",
    "DEST_AIRPORT_CD": "BOS",
  },
  {
    "MEM_NUM": "PQL4222",
    "ORIG_AIRPORT_CD": "DFW",
    "DEST_AIRPORT_CD": "BOS",
  },
  {
    "MEM_NUM": "LSW3136",
    "ORIG_AIRPORT_CD": "DFW",
    "DEST_AIRPORT_CD": "BOS",
  },
  {
    "MEM_NUM": "KTW6036",
    "ORIG_AIRPORT_CD": "DFW",
    "DEST_AIRPORT_CD": "BOS",
  },
  {
    "MEM_NUM": "KTM3836",
    "ORIG_AIRPORT_CD": "DFW",
    "DEST_AIRPORT_CD": "BOS",
  },
  {
    "MEM_NUM": "TWS1320",
    "ORIG_AIRPORT_CD": "DFW",
    "DEST_AIRPORT_CD": "BOS",
  },
  {
    "MEM_NUM": "KMP3035",
    "ORIG_AIRPORT_CD": "DFW",
    "DEST_AIRPORT_CD": "BOS",
  },
  {
    "MEM_NUM": "JOY4567",
    "ORIG_AIRPORT_CD": "DFW",
    "DEST_AIRPORT_CD": "BOS",
  },
  {
    "MEM_NUM": "MIT3040",
    "ORIG_AIRPORT_CD": "DFW",
    "DEST_AIRPORT_CD": "BOS",
  },
  {
    "MEM_NUM": "JKW3030",
    "ORIG_AIRPORT_CD": "DFW",
    "DEST_AIRPORT_CD": "BOS",
  },
  {
    "MEM_NUM": "PRT5060",
    "ORIG_AIRPORT_CD": "DFW",
    "DEST_AIRPORT_CD": "BOS",
  },
  {
    "MEM_NUM": "HEL3040",
    "ORIG_AIRPORT_CD": "DFW",
    "DEST_AIRPORT_CD": "BOS",
  },
  {
    "MEM_NUM": "HEX1212",
    "ORIG_AIRPORT_CD": "DFW",
    "DEST_AIRPORT_CD": "BOS",
  },
  {
    "MEM_NUM": "LTW3136",
    "ORIG_AIRPORT_CD": "DFW",
    "DEST_AIRPORT_CD": "BOS",
  },
  {
    "MEM_NUM": "LTW3136",
    "ORIG_AIRPORT_CD": "DFW",
    "DEST_AIRPORT_CD": "BOS",
  },
  {
    "MEM_NUM": "LTW3136",
    "ORIG_AIRPORT_CD": "DFW",
    "DEST_AIRPORT_CD": "BOS",
  },
  {
    "MEM_NUM": "LTW3136",
    "ORIG_AIRPORT_CD": "DFW",
    "DEST_AIRPORT_CD": "BOS",
  },
  {
    "MEM_NUM": "LTW3136",
    "ORIG_AIRPORT_CD": "DFW",
    "DEST_AIRPORT_CD": "BOS",
  },
  {
    "MEM_NUM": "LTW3136",
    "ORIG_AIRPORT_CD": "DFW",
    "DEST_AIRPORT_CD": "BOS",
  },
  {
    "MEM_NUM": "LTW3136",
    "ORIG_AIRPORT_CD": "DFW",
    "DEST_AIRPORT_CD": "BOS",
  },
  {
    "MEM_NUM": "LTW3136",
    "ORIG_AIRPORT_CD": "DFW",
    "DEST_AIRPORT_CD": "BOS",
  },
  {
    "MEM_NUM": "HLK2425",
    "ORIG_AIRPORT_CD": "DFW",
    "DEST_AIRPORT_CD": "BOS",
  },
  {
    "MEM_NUM": "HND3423",
    "ORIG_AIRPORT_CD": "DFW",
    "DEST_AIRPORT_CD": "BOS",
  },
 

];