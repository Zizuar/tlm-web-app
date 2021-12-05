import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {ContactsComponent} from './contacts/contacts.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {SafeUrlPipe} from '../pipes/safe-url.pipe';
import {UnescapePipe} from '../pipes/unescape.pipe';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ContactsComponent,
    SafeUrlPipe,
    UnescapePipe,
  ],
  imports: [
    CommonModule,
    NgbModule,
    FontAwesomeModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ContactsComponent,
    SafeUrlPipe,
    UnescapePipe,
  ]
})
export class SharedComponentsModule { }
