import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProposalService } from 'src/app/services/proposal.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-upload-attachments',
  templateUrl: './upload-attachments.component.html',
  styleUrls: ['./upload-attachments.component.css']
})
export class UploadAttachmentsComponent implements OnInit {
  ngOnInit(): void {
  }
  uploadAttachments =  {
        "projectSummary": "",
        "projectBudget": "",
        "other": ""
    }
    selectedFile: File | null = null;
    uploadProgress: number | null = null;
    constructor(private proposalService: ProposalService) { }

    onFileSelected(event: any) {
      if (event.target.files.length > 0) {
        this.selectedFile = event.target.files[0];
        console.log(this.selectedFile);   
      }
    }
    onUpload() {
      if (this.selectedFile) {
        this.proposalService.uploadfile(this.selectedFile).subscribe((response => {
          Swal.fire("Success!","<b>Selected file " +this.selectedFile?.name+ " uploaded successfully.</b>", "success");
        }));
      } 
      else {
        alert("Please select a file first")
      }
    }
    onSave(): void {  
      localStorage.setItem('uploadAttachments', JSON.stringify(this.selectedFile?.name)); 
    }
}
