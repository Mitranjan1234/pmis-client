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
          return this.http.post(`${baseUrl}/proposal/track_prop`, trackingDetails);
          }
        public approveProposal(propId: any) {
          const propJson={
            propId: ""
          }
          propJson.propId=propId
          return this.http.post(`${baseUrl}/proposal/approve_prop`, propJson);
          } 
        public rejectProposal(propId: any) {
           const propJson={
            propId: ""
          }
          propJson.propId=propId
          return this.http.post(`${baseUrl}/proposal/reject_prop`, propJson);
          }  
          
          public getProposalDataById(propId: any) {
            const propJson={
             propId: ""
           }
           propJson.propId=propId
           return this.http.post(`${baseUrl}/proposal/get_prop_data_by_id`, propJson);
           } 

           public proposalProgressSubmit(proposalProgressData: any) {
            return this.http.post(`${baseUrl}/proposal/submit_prop_prog_data`,proposalProgressData);
           } 

           public getProjectProgress(proposalProgressData :any){
            return this.http.post(`${baseUrl}/proposal/get_prop_prog_data`,proposalProgressData);
           }


          
}        