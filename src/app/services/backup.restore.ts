import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import baseUrl from './helper';

@Injectable({
    providedIn: 'root',
})

export class BackupRestoreService  {

    constructor(private http: HttpClient) { }

    public restoreData() {
    return this.http.post(`${baseUrl}/backup/restore`, null);
  }   
}