import { Injectable } from '@angular/core';
import { IconDefinition } from '@fortawesome/free-regular-svg-icons';
import {
  faDiscord,
  faFacebook,
  faInstagram,
  faTiktok,
  faTwitch,
  faXTwitter,
  faThreads,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Observable, of } from 'rxjs';

export interface ContactMethod {
  name: string;
  icon?: IconDefinition;
  svg?: string;
  username: string;
  url?: string;
}

@Injectable({
  providedIn: 'root',
})
export class ContactsService {
  contactMethodList: ContactMethod[] = [
    {
      name: 'Discord',
      icon: faDiscord,
      username: 'tylerlevsmusic',
    },
    {
      name: 'Twitch',
      icon: faTwitch,
      url: 'https://twitch.tv/tylerlevsmusic',
      username: 'TylerLevsMusic',
    },
    {
      name: 'Tiktok',
      icon: faTiktok,
      url: 'https://www.tiktok.com/@tylerlevsmusic',
      username: '@tylerlevsmusic',
    },
    {
      name: 'X',
      icon: faXTwitter,
      url: 'https://x.com/tyler_levs',
      username: '@Tyler_Levs',
    },
    {
      name: 'Instagram',
      icon: faInstagram,
      url: 'https://www.instagram.com/tylerlevs/',
      username: 'tylerlevs',
    },
    {
      name: 'Threads',
      icon: faThreads,
      url: 'https://www.threads.net/@tylerlevs',
      username: '@tylerlevs',
    },
    {
      name: 'Facebook',
      icon: faFacebook,
      url: 'https://www.facebook.com/tylerlevs',
      username: 'tylerlevs',
    },
    {
      name: 'Email',
      icon: faEnvelope,
      url: 'mailto:contact@tylerlevs.com',
      username: 'contact@tylerlevs.com',
    },
  ];

  constructor() {}

  getContactMethods(): Observable<ContactMethod[]> {
    return of(this.contactMethodList);
  }
}
