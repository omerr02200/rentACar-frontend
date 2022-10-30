import { partitionArray } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetail } from 'src/app/models/carDetail';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car-detail-page',
  templateUrl: './car-detail-page.component.html',
  styleUrls: ['./car-detail-page.component.css']
})
export class CarDetailPageComponent implements OnInit {

  carDetails:CarDetail[];
  dataLoaded = false

  imagePath = "https://localhost:44316/Uploads/Images/"

  constructor(private carService:CarService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      this.getCarDetailsById(params["carId"])
    })
  }

  getCarDetailsById(carId:number){
    this.carService.getCarDetailsById(carId).subscribe((response=>{
      this.carDetails=response.data
      this.dataLoaded = true;
    }))
  }
}
