import { HttpClient, HttpEvent, HttpEventType } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
    providedIn: 'root',
})
export class ProposalService  {

        constructor(private http: HttpClient) { }
        public uploadfile(file: File) {
            let formParams = new FormData();
            formParams.append('file', file)
            return this.http.post(`${baseUrl}/file/upload`, formParams);
          }

        public submitProposal(proposalData: any) {
        return this.http.post(`${baseUrl}/proposal/create`, proposalData);
        }   

        public trackProposal(trackingDetails: any) {
          return this.http.post(`${baseUrl}/proposal/track`, trackingDetails);
          } 
}