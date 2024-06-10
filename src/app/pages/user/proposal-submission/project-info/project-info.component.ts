import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-info',
  templateUrl: './project-info.component.html',
  styleUrls: ['./project-info.component.css']
})
export class ProjectInfoComponent implements OnInit {
  
  
  // @Input('projectInformationData')
  // projectInformationData: {
  //   projectTitle?: string,
  //   projectCategory?: string,
  //   projectDescription?: string,
  //   projectSubmsnType?: string,
  //   projectDuration?: string,
  //   amountRequested?: string,
  //   timeline?: {
  //       start_date?: string,
  //       end_date?: string
  //       }
  // } = {};

  projectInformationData  = {
    "projectTitle": "",
    "projectCategory": "",
    "projectDescription": "",
    "projectSubmsnType": "",
    "projectDuration": "",
    "amountRequested":"",
    "timeline": {
            "start_date": "",
            "end_date": "",
            }
    }

  message ="sendin msg from sender"
  constructor() { }

  ngOnInit(): void {  
  }

  onSave(): void {  
    localStorage.setItem('projectInformationData', JSON.stringify(this.projectInformationData));
  }

}

