import { Injectable } from '@angular/core';
import { IconDefinition } from '@fortawesome/free-regular-svg-icons';
import {
  faFacebook,
  faInstagram,
  faSpotify,
  faThreads,
  faTiktok,
  faTwitch,
  faXTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { Observable, of } from 'rxjs';

export interface Social {
  name: string;
  icon: IconDefinition;
  url: string;
}

@Injectable({
  providedIn: 'root',
})
export class SocialsService {
  socials: Social[] = [
    {
      name: 'Twitch',
      icon: faTwitch,
      url: 'https://twitch.tv/tylerlevsmusic',
    },
    {
      name: 'Facebook',
      icon: faFacebook,
      url: 'https://www.facebook.com/tylerlevs',
    },
    {
      name: 'X',
      icon: faXTwitter,
      url: 'https://x.com/tyler_levs',
    },
    {
      name: 'Instagram',
      icon: faInstagram,
      url: 'https://www.instagram.com/tylerlevs/',
    },
    {
      name: 'Threads',
      icon: faThreads,
      url: 'https://www.threads.net/@tylerlevs',
    },
    {
      name: 'Tiktok',
      icon: faTiktok,
      url: 'https://www.tiktok.com/@tylerlevsmusic',
    },
    {
      name: 'Youtube',
      icon: faYoutube,
      url: 'https://www.youtube.com/@TylerLevs',
    },
    {
      name: 'Spotify',
      icon: faSpotify,
      url: 'https://open.spotify.com/artist/5NUqe9c7M8oSBiHns5L6SE',
    },
  ];

  constructor() {}

  getSocials(): Observable<Social[]> {
    return of(this.socials);
  }
}
