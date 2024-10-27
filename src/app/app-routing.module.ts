import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { RegisterResturantComponent } from './register-resturant/register-resturant.component';
import { QrCodeComponent } from './qr-code/qr-code.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { CustomerPageComponent } from './customer-page/customer-page.component';

const routes: Routes = [
  { path: 'landingPage', component: LandingPageComponent },
  { path: 'registerResturant', component: RegisterResturantComponent },
  { path: '', component:  QrCodeComponent},
  { path: 'adminPage', component:  AdminPageComponent},
  { path: 'customerPage', component:  CustomerPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
