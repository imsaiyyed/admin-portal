import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatButtonModule, MatCheckboxModule,MatMenuModule,MatIconModule,MatToolbarModule,MatFormFieldModule,MatInputModule} from '@angular/material';
import {MatSidenavModule} from '@angular/material/sidenav';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CompanyDetailsComponent } from './components/company-details/company-details.component';
import { AccountDetailsComponent } from './components/account-details/account-details.component';
import { ClientDetailsComponent } from './components/client-details/client-details.component';
import { ProjectComponent } from './components/project/project.component';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';
import { CommunicationDetailsComponent } from './components/communication-details/communication-details.component';
const appRoutes: Routes = [
  { path: 'company-details', component: CompanyDetailsComponent },
  { path: 'account-details', component: AccountDetailsComponent },
  { path: 'client-details',  component: ClientDetailsComponent  },
  { path: 'projects', component:ProjectComponent},
  { path: 'employee-details', component:EmployeeDetailsComponent},
  {path: 'communication-details', component:CommunicationDetailsComponent}
  // { path: '**', component: PageNotFoundComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    CompanyDetailsComponent,
    AccountDetailsComponent,
    ClientDetailsComponent,
    ProjectComponent,
    EmployeeDetailsComponent,
    CommunicationDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatButtonModule, MatCheckboxModule, MatSidenavModule,MatMenuModule,MatIconModule,MatToolbarModule,MatFormFieldModule,MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
