import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContactsComponent } from './contacts/contacts.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SafeUrlPipe } from '../pipes/safe-url.pipe';
import { UnescapePipe } from '../pipes/unescape.pipe';
import { RouterModule } from '@angular/router';
import { BioComponent } from './bio/bio.component';
import { CallToActionComponent } from './call-to-action/call-to-action.component';
import { LoadingScreenComponent } from './loading-screen/loading-screen.component';
import { CountryCodeToNamePipe } from '../pipes/country-code-to-name.pipe';
import { ClickStopPropagationDirective } from '../directives/click-stop-propagation.directive';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { DeleteConfirmModalComponent } from './delete-confirm-modal/delete-confirm-modal.component';
import { EventsListComponent } from './events-list/events-list.component';
import { EventItemComponent } from './events-list/event-item/event-item.component';
import { ToastsContainerComponent } from './toasts-container/toasts-container.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ContactsComponent,
    BioComponent,
    CallToActionComponent,
    SafeUrlPipe,
    UnescapePipe,
    LoadingScreenComponent,
    CountryCodeToNamePipe,
    ClickStopPropagationDirective,
    LoadingSpinnerComponent,
    DeleteConfirmModalComponent,
    EventsListComponent,
    EventItemComponent,
    ToastsContainerComponent,
  ],
  imports: [CommonModule, NgbModule, FontAwesomeModule, RouterModule, FormsModule],
  exports: [
    HeaderComponent,
    FooterComponent,
    ContactsComponent,
    BioComponent,
    CallToActionComponent,
    SafeUrlPipe,
    UnescapePipe,
    LoadingScreenComponent,
    CountryCodeToNamePipe,
    ClickStopPropagationDirective,
    LoadingSpinnerComponent,
    EventsListComponent,
    ToastsContainerComponent,
  ],
})
export class SharedComponentsModule {}
