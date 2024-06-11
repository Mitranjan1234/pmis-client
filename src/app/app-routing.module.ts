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
import { ReportSummeryComponent } from './pages/report-summery/report-summery.component';
import { SignupComponent } from './pages/signup/signup.component';
import { AdminGuard } from './services/admin.guard';
import { NormalGuard } from './services/normal.guard';
import { AdminDashboardComponent } from './pages/admin/admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ChangePassDialogComponent } from './pages/change-pass-dialog/change-pass-dialog.component';
import { ResetPassDialogComponent } from './pages/reset-pass-dialog/reset-pass-dialog.component';
import { ProposalSubmissionComponent } from './pages/user/proposal-submission/proposal-submission.component';
import { ProposalProgressComponent } from './pages/user/proposal-progress/proposal-progress.component';
import { TrackProposalComponent } from './pages/user/track-proposal/track-proposal.component';



const routes: Routes = [
  // { path: '*', component: AppComponent },
  // { path: 'login', component: LoginComponent },
  // { path: 'signup', component: SignupComponent },
  // { path: 'forgot-password', component: ForgotPasswordComponent },
  // { path: 'nav', component: NavbarComponent },
  // { path: 'home', component: HomeComponent },
  // { path: 'manage-users', component: ManageUsersComponent },
  // { path: 'proposal-submission', component: ProposalSubmissionComponent },
  // { path: 'approval-management', component: ApprovalManagementComponent },
  // { path: 'progress-report', component: ProgressReportComponent },
  // { path: 'fund-management', component: FundManagementComponent },
  // { path: 'report-summery', component: ReportSummeryComponent },
  // { path: 'backup-module', component: BackupModuleComponent },
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'signup',
    component: SignupComponent,
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full',
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent,
    pathMatch: 'full',
  },
  {
    path: 'user/reset-password',
    component: ResetPassDialogComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: 'admin',
    component: AdminDashboardComponent,
    canActivate: [AdminGuard],
    children: [
      {
        path: '',
        component: HomeComponent,
        pathMatch: 'full',
      },
      {
        path: 'change-password',
        component: ChangePassDialogComponent,
      },
      {
        path: 'profile',
        component: ProfileComponent,
      },
      {
        path: 'manage-users',
        component: ManageUsersComponent,
      },
      {
        path: 'approval-management',
        component: ApprovalManagementComponent,
      },
      {
        path: 'progress-report',
        component: ProgressReportComponent,
      },
      {
        path: 'fund-management',
        component: FundManagementComponent,
      },
      {
        path:'report-summery',
        component: ReportSummeryComponent

      },
      {
        path: 'backup-module',
        component: BackupModuleComponent,
      },

    ]
  },
  {
    path: 'user-dashboard',
    component: UserDashboardComponent,
    canActivate: [NormalGuard],
    children: [
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'proposal-submission',
        component: ProposalSubmissionComponent,
      },
      {
        path: 'track-proposal',
        component: TrackProposalComponent,
      },
      {
        path: 'proposal-progress',
        component: ProposalProgressComponent,
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
