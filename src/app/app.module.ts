import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

//component
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SignupComponent } from './pages/signup/signup.component';

//import {MatIconModule} from '@angular/material/icon';
//import {MatButtonModule} from '@angular/material/button';
//import {MatToolbarModule} from '@angular/material/toolbar';
//import {MatListModule} from '@angular/material/list';
//import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
//import {MatAutocompleteModule} from '@angular/material/autocomplete';
//import {MatInputModule} from '@angular/material/input';
//import {MatFormFieldModule} from '@angular/material/form-field';
//import {MatCardModule} from '@angular/material/card';
//import {MatPaginatorModule} from '@angular/material/paginator';
//import {MatTableModule} from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
//import {MatSidenavModule} from '@angular/material/sidenav';
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
//import { MatSelectModule } from '@angular/material/select';
//import { MatDividerModule } from '@angular/material/divider';
//import { TargetAudiaenceComponent } from './target-audiaence/target-audiaence.component';

// Material Form Controls
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
// Material Navigation
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
// Material Layout
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTreeModule } from '@angular/material/tree';
// Material Buttons & Indicators
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatBadgeModule } from '@angular/material/badge';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRippleModule } from '@angular/material/core';
// Material Popups & Modals
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
// Material Data tables
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';


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
