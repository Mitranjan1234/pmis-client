import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-review-submit',
  templateUrl: './review-submit.component.html',
  styleUrls: ['./review-submit.component.css']
})
export class ReviewSubmitComponent implements OnInit {
  projectInformationData: any
  piInformation: any
  coPiInformation:any
  uploadAttachments: any
  constructor() { }

  ngOnInit(): void {
    this.projectInformationData= localStorage.getItem("projectInformationData")
    this.piInformation= localStorage.getItem("piInformation")
    this.coPiInformation= localStorage.getItem("coPiInformation")
    this.uploadAttachments= localStorage.getItem("uploadAttachments")
  }
}
