import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedComponentsModule } from './components/components.shared.module';
import { MainPageModule } from './pages/main-page/main-page.module';
import { ReleasesModule } from './pages/releases/releases.module';
import { MerchStoreModule } from './pages/merch-store/merch-store.module';
import { PressModule } from './pages/press/press.module';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { scheduleReducer } from './store/schedule/schedule.reducer';
import { ScheduleEffects } from './store/schedule/schedule.effects';
import { productsReducer } from './store/products/products.reducer';
import { ProductsEffects } from './store/products/products.effects';
import { eventsReducer } from './store/events/events.reducer';
import { EventsEffects } from './store/events/events.effects';
import { pressReleasesReducer } from './store/press-releases/press-releases.reducer';
import { PressReleasesEffects } from './store/press-releases/press-releases.effects';
import { releasesReducer } from './store/releases/releases.reducer';
import { ReleasesEffects } from './store/releases/releases.effects';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { EventsPageComponent } from './pages/events-page/events-page.component';
import { BioPageComponent } from './pages/bio-page/bio-page.component';

@NgModule({
  declarations: [AppComponent, ContactPageComponent, EventsPageComponent, BioPageComponent],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    SharedComponentsModule,
    MainPageModule,
    ReleasesModule,
    MerchStoreModule,
    PressModule,
    StoreModule.forRoot({
      schedule: scheduleReducer,
      products: productsReducer,
      events: eventsReducer,
      pressReleases: pressReleasesReducer,
      releases: releasesReducer,
    }),
    EffectsModule.forRoot([ScheduleEffects, ProductsEffects, EventsEffects, PressReleasesEffects, ReleasesEffects]),
  ],
  providers: [provideHttpClient(withInterceptorsFromDi())],
})
export class AppModule {}
