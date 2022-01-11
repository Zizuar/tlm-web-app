import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedComponentsModule } from './components/components.shared.module';
import { MainPageModule } from './pages/main-page/main-page.module';
import { ReleasesModule } from './pages/releases/releases.module';
import { StoreModule } from './pages/store/store.module';
import { PressModule } from './pages/press/press.module';
import { AdminModule } from './pages/admin/admin.module';
import { AuthModule } from "@auth0/auth0-angular";
import { environment } from "../environments/environment";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AuthModule.forRoot({
      domain: environment.auth.domain,
      clientId: environment.auth.clientId,
    }),
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    SharedComponentsModule,
    MainPageModule,
    ReleasesModule,
    StoreModule,
    PressModule,
    AdminModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
