import { HttpClient, HttpErrorResponse, HttpEvent, HttpEventType } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, catchError, map, throwError } from 'rxjs';
import baseUrl from './helper';

@Injectable({
    providedIn: 'root',
})
export class FileUploadService  {

        constructor(private http: HttpClient) { }
        public uploadfile(file: File) {
            let formParams = new FormData();
            formParams.append('file', file)
            return this.http.post(`${baseUrl}/file/upload`, formParams);
          }
}