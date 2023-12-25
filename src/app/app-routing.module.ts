import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ApprovalManagementComponent } from './pages/approval-management/approval-management.component';
import { BackupModuleComponent } from './pages/backup-module/backup-module.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { FundManagementComponent } from './pages/fund-management/fund-management.component';
import { LoginComponent } from './pages/login/login.component';
import { ManageUsersComponent } from './pages/manage-users/manage-users.component';
import { ProgressReportComponent } from './pages/progress-report/progress-report.component';
import { ProposalSubmissionComponent } from './pages/proposal-submission/proposal-submission.component';
import { ReportSummeryComponent } from './pages/report-summery/report-summery.component';
import { SignupComponent } from './pages/signup/signup.component';


const routes: Routes = [
  { path: '*', component: AppComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'nav', component: NavbarComponent },
  { path: 'home', component: HomeComponent },
  { path: 'manage-users', component: ManageUsersComponent },
  { path: 'proposal-submission', component: ProposalSubmissionComponent },
  { path: 'approval-management', component: ApprovalManagementComponent },
  { path: 'progress-report', component: ProgressReportComponent },
  { path: 'fund-management', component: FundManagementComponent },
  { path: 'report-summery', component: ReportSummeryComponent },
  { path: 'backup-module', component: BackupModuleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
