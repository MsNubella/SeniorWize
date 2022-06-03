import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationbarComponent } from './navigationbar/navigationbar.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CarouselComponent } from './carousel/carousel.component';
import { SponsorComponent } from './sponsor/sponsor.component';
import { PaymentComponent } from './payment/payment.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationbarComponent,
    WelcomeComponent,
    CarouselComponent,
    SponsorComponent,
    PaymentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
