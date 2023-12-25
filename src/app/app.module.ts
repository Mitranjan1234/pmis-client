import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SignupComponent } from './pages/signup/signup.component';

import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import {MatSidenavModule} from '@angular/material/sidenav';
import {
  MatSelectModule,
  MatSlideToggleModule,
  MatDividerModule,
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './pages/login/login.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { ManageUsersComponent } from './pages/manage-users/manage-users.component';
import { ProposalSubmissionComponent } from './pages/proposal-submission/proposal-submission.component';
import { ApprovalManagementComponent } from './pages/approval-management/approval-management.component';
import { ProgressReportComponent } from './pages/progress-report/progress-report.component';
import { FundManagementComponent } from './pages/fund-management/fund-management.component';
import { ReportSummeryComponent } from './pages/report-summery/report-summery.component';
import { BackupModuleComponent } from './pages/backup-module/backup-module.component';
//import { TargetAudiaenceComponent } from './target-audiaence/target-audiaence.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    NavbarComponent,
    SignupComponent,
    ForgotPasswordComponent,
    ManageUsersComponent,
    ProposalSubmissionComponent,
    ApprovalManagementComponent,
    ProgressReportComponent,
    FundManagementComponent,
    ReportSummeryComponent,
    BackupModuleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatSelectModule,
    MatDividerModule,
    MatSlideToggleModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSidenavModule,
    MatListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
