import {Injectable} from '@angular/core';
import {IconDefinition} from '@fortawesome/free-regular-svg-icons';
import {faFacebook, faInstagram, faSpotify, faTiktok, faTwitch, faTwitter, faYoutube} from '@fortawesome/free-brands-svg-icons';
import {Observable, of} from 'rxjs';

export interface Social {
  name: string;
  icon: IconDefinition;
  link: string;
}

@Injectable({
  providedIn: 'root',
})
export class SocialsService {
  socials: Social[] = [
    {
      name: 'Twitch',
      icon: faTwitch,
      link: 'https://twitch.tv/tylerlevsmusic',
    },
    {
      name: 'Facebook',
      icon: faFacebook,
      link: 'https://www.facebook.com/tylerlevs',
    },
    {
      name: 'Twitter',
      icon: faTwitter,
      link: 'https://twitter.com/tyler_levs',
    },
    {
      name: 'Instagram',
      icon: faInstagram,
      link: 'https://www.instagram.com/tylerlevs/',
    },
    {
      name: 'Tiktok',
      icon: faTiktok,
      link: 'https://www.tiktok.com/@tylerlevsmusic',
    },
    {
      name: 'Youtube',
      icon: faYoutube,
      link: 'https://www.youtube.com/c/TylerLevs',
    },
    {
      name: 'Spotify',
      icon: faSpotify,
      link: 'https://open.spotify.com/artist/5NUqe9c7M8oSBiHns5L6SE',
    },
  ];

  constructor() {
  }

  getSocials(): Observable<Social[]> {
    return of(this.socials);
  }
}
