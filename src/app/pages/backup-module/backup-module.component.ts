import { Component, OnInit } from '@angular/core';
import { BackupRestoreService } from 'src/app/services/backup.restore';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-backup-module',
  templateUrl: './backup-module.component.html',
  styleUrls: ['./backup-module.component.css']
})
export class BackupModuleComponent implements OnInit {

onSubmit() {
  this.backupRestoreService.restoreData().subscribe(response => {
    Swal.fire("Success! Data restored from backup", "", "success").then((result) => {
      if (result.isConfirmed) {
        console.log("Response: ", response);
       // window.location.href = '/login';
      } else {
        Swal.fire("Submission Fail!", "Something went wrong.", "info");
      }
    });
  });
  Swal.fire("Success! Data restored from backup", "", "success");
}

  constructor(private backupRestoreService: BackupRestoreService) { }

  ngOnInit() {
  }

}
