import { Component } from '@angular/core';
import {ContactsService} from '../../services/contacts.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent {
  contactMethods = this.contactsService.getContactMethods();

  constructor(
    private readonly contactsService: ContactsService
  ) { }

}
