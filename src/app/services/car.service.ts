import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BrandResponseModel } from '../models/brandResponseModel';
import { CarDetailResponseModel } from '../models/carDetailResponseModel';
import { CarResponseModel } from '../models/carResponseModel';
import { ColorResponseModel } from '../models/colorResponseModel';
import { CustomerResponseModel } from '../models/customerResponseModel';
import { RentalDetailResponseModel } from '../models/rentalDetailResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  carsUrl = "https://localhost:44316/api/cars/getall";

  carDetailsUrl = "https://localhost:44316/api/cars/getcardetails";

  colorsUrl = "https://localhost:44316/api/colors/getall";

  customersUrl = "https://localhost:44316/api/customers/getall";

  rentalDetailsUrl = "https://localhost:44316/api/rentals/getcarrentaldetails";

  brandsUrl = "https://localhost:44316/api/brands/getall";


  constructor(private httpClient:HttpClient) { }

  getCars():Observable<CarResponseModel>{
    return this.httpClient.get<CarResponseModel>(this.carsUrl)
  }

  getCarDetails():Observable<CarDetailResponseModel>{
    return this.httpClient.get<CarDetailResponseModel>(this.carDetailsUrl)
  }

  getColors():Observable<ColorResponseModel>{
    return this.httpClient.get<ColorResponseModel>(this.colorsUrl);
  }

  getCustomers():Observable<CustomerResponseModel>{
    return this.httpClient.get<CustomerResponseModel>(this.customersUrl)
  }

  getRentalDetails():Observable<RentalDetailResponseModel>{
    return this.httpClient.get<RentalDetailResponseModel>(this.rentalDetailsUrl)
  }

  getBrands():Observable<BrandResponseModel>{
    return this.httpClient.get<BrandResponseModel>(this.brandsUrl)
  }
}
