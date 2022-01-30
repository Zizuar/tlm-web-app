import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { RouterModule } from '@angular/router';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { AdminLoginInfoComponent } from './admin-login-info/admin-login-info.component';
import { AdminUnauthorizedComponent } from './admin-unauthorized/admin-unauthorized.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AdminComponent,
    AdminHeaderComponent,
    AdminLoginInfoComponent,
    AdminUnauthorizedComponent,
  ],
  imports: [
    CommonModule,
    DashboardModule,
    RouterModule,
    NgbNavModule,
    FontAwesomeModule,
  ],
})
export class AdminModule {}
