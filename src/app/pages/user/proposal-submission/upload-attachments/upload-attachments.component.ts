import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FileUploadService } from 'src/app/services/file-upload.service';

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
  
    constructor(private fileUploadService: FileUploadService) { }

    onFileSelected(event: any) {
      if (event.target.files.length > 0) {
        this.selectedFile = event.target.files[0];
        console.log(this.selectedFile);
      }
    }
    onUpload() {
      if (this.selectedFile) {
        this.fileUploadService.uploadfile(this.selectedFile).subscribe(
          (res) => console.log(res),
          (err) => console.log(err)
        );
        alert('Uploaded Successfully.');
      } 
      else {
        alert("Please select a file first")
      }
    }
}
