import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QrCodeModule } from 'ng-qrcode';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { RegisterResturantComponent } from './register-resturant/register-resturant.component';
import { QrCodeComponent } from './qr-code/qr-code.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { CustomerPageComponent } from './customer-page/customer-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    RegisterResturantComponent,
    QrCodeComponent,
    AdminPageComponent,
    CustomerPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    QrCodeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
