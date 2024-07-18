import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report-summery',
  templateUrl: './report-summery.component.html',
  styleUrls: ['./report-summery.component.css']
})
export class ReportSummeryComponent implements OnInit {
  currentDate = new Date();
  constructor() { }

  ngOnInit() {
  }

}
