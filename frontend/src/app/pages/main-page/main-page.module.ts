import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page.component';
import { MainPageRoutingModule } from './main-page.routing';
import { EventsComponent } from './events/events.component';
import { TwitchComponent } from './twitch/twitch.component';
import { YoutubeComponent } from './youtube/youtube.component';
import { SharedComponentsModule } from '../../components/components.shared.module';
import { MastheadComponent } from './masthead/masthead.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EventItemComponent } from './events/event-item/event-item.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LatestReleasesModule } from './latest-releases/latest-releases.module';
import { UpcomingReleasesComponent } from './upcoming-releases/upcoming-releases.component';
import { CountdownComponent } from './masthead/countdown/countdown.component';

@NgModule({
  declarations: [
    MainPageComponent,
    EventsComponent,
    EventItemComponent,
    TwitchComponent,
    YoutubeComponent,
    MastheadComponent,
    UpcomingReleasesComponent,
    CountdownComponent,
  ],
  imports: [
    CommonModule,
    MainPageRoutingModule,
    SharedComponentsModule,
    FontAwesomeModule,
    NgbModule,
    LatestReleasesModule,
  ],
  exports: [],
})
export class MainPageModule {}
