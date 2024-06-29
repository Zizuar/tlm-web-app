import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthHttpInterceptor, AuthModule } from "@auth0/auth0-angular";
import { environment } from "../environments/environment";
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from "@angular/common/http";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { SharedComponentsModule } from "./components/components.shared.module";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AdminModule } from "./pages/admin/admin.module";
import { StoreModule } from "@ngrx/store";
import { authReducer } from "./store/auth/auth.reducer";
import { scheduleReducer } from "./store/schedule/schedule.reducer";
import { orderReducer } from "./store/orders/orders.reducer";
import { productsReducer } from "./store/products/products.reducer";
import { eventsReducer } from "./store/events/events.reducer";
import { pressReleasesReducer } from "./store/press-releases/press-releases.reducer";
import { releasesReducer } from "./store/releases/releases.reducer";
import { EffectsModule } from "@ngrx/effects";
import { AuthEffects } from "./store/auth/auth.effects";
import { ScheduleEffects } from "./store/schedule/schedule.effects";
import { OrderEffects } from "./store/orders/orders.effects";
import { ProductsEffects } from "./store/products/products.effects";
import { EventsEffects } from "./store/events/events.effects";
import { PressReleasesEffects } from "./store/press-releases/press-releases.effects";
import { ReleasesEffects } from "./store/releases/releases.effects";
import { venuesReducer } from "./store/venues/venues.reducer";
import { VenuesEffects } from "./store/venues/venues.effects";

@NgModule({
  declarations: [
    AppComponent
  ],
  bootstrap: [AppComponent],
  imports: [
    AuthModule.forRoot(environment.auth),
    AppRoutingModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    SharedComponentsModule,
    AdminModule,
    StoreModule.forRoot({
        auth: authReducer,
        schedule: scheduleReducer,
        order: orderReducer,
        products: productsReducer,
        events: eventsReducer,
        pressReleases: pressReleasesReducer,
        releases: releasesReducer,
        venues: venuesReducer,
    }),
    EffectsModule.forRoot([
      AuthEffects,
      ScheduleEffects,
      OrderEffects,
      ProductsEffects,
      EventsEffects,
      PressReleasesEffects,
      ReleasesEffects,
      VenuesEffects,
    ])
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthHttpInterceptor, multi: true },
    provideHttpClient(withInterceptorsFromDi())
  ]
})
export class AppModule { }
