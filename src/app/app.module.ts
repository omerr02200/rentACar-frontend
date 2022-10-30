import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarComponent } from './components/car/car.component';
import { BrandComponent } from './components/brand/brand.component';
import { ColorComponent } from './components/color/color.component';
import { RentalComponent } from './components/rental/rental.component';
import { CustomerComponent } from './components/customer/customer.component';
import { NaviComponent } from './components/navi/navi.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { RentalDetailComponent } from './components/rental-detail/rental-detail.component';
import { CarDetailPageComponent } from './components/car-detail-page/car-detail-page.component';

@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    BrandComponent,
    ColorComponent,
    RentalComponent,
    CustomerComponent,
    NaviComponent,
    CarDetailComponent,
    RentalDetailComponent,
    CarDetailPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
