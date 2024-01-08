import { Component, OnInit } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pmis-client';
  constructor(private ngxService: NgxUiLoaderService) { }

  OnInit() {
    this.ngxService.start();
    setTimeout(() => { this.ngxService.stop() }, 20000);
  }

}
