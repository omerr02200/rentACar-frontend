import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Brand } from '../models/brand';
import { Car } from '../models/car';
import { CarDetail } from '../models/carDetail';
import { Color } from '../models/color';
import { Customer } from '../models/customer';
import { ListResponseModel } from '../models/listResponseModel';
import { RentalDetail } from '../models/rentalDetail';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  url = "https://localhost:44316/api/"


  constructor(private httpClient:HttpClient) { }

  getCars():Observable<ListResponseModel<Car>>{
    let newPath = this.url + "cars/getall";
    return this.httpClient.get<ListResponseModel<Car>>(newPath)
  }

  getCarDetails():Observable<ListResponseModel<CarDetail>>{
    let newPath = this.url + "cars/getcardetails"
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath)
  }

  getColors():Observable<ListResponseModel<Color>>{
    let newPath = this.url + "colors/getall"
    return this.httpClient.get<ListResponseModel<Color>>(newPath);
  }

  getCustomers():Observable<ListResponseModel<Customer>>{
    let newPath = this.url + "customers/getall"
    return this.httpClient.get<ListResponseModel<Customer>>(newPath)
  }

  getRentalDetails():Observable<ListResponseModel<RentalDetail>>{
    let newPath = this.url + "rentals/getcarrentaldetails"
    return this.httpClient.get<ListResponseModel<RentalDetail>>(newPath)
  }

  getBrands():Observable<ListResponseModel<Brand>>{
    let newPath = this.url + "brands/getall"
    return this.httpClient.get<ListResponseModel<Brand>>(newPath)
  }

  getCarsByBrand(brandId:number):Observable<ListResponseModel<CarDetail>>{
    let newPath = this.url + "cars/getcarsbybrandid?brandid=" + brandId
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath)
  }

  getCarsByColor(colorId:number):Observable<ListResponseModel<CarDetail>>{
    let newPath = this.url + "cars/getcarsbycolorid?colorid=" + colorId
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath)
  }

  getCarDetailsById(carId:number):Observable<ListResponseModel<CarDetail>>{
    let newPath = this.url + "cars/getcardetailsbyid?carid=" + carId
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath)
  }
}
