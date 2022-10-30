import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetail } from 'src/app/models/carDetail';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {

  carDetails:CarDetail[]=[];
  dataLoaded = false;

  constructor(private carService:CarService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["brandId"]){
        this.getCarsByBrand(params["brandId"])
      }else if(params["colorId"]){
        this.getCarsByColor(params["colorId"])
      }else{
        this.getCarDetails()
      }
    })
    
  }

  getCarDetails(){
    this.carService.getCarDetails().subscribe((response=>{
      this.carDetails=response.data
      this.dataLoaded=true;
    }))
  }
  
  getCarsByBrand(brandId:number){
    this.carService.getCarsByBrand(brandId).subscribe((response=>{
      this.carDetails=response.data
      this.dataLoaded=true;
    }))
  }

  getCarsByColor(colorId:number){
    this.carService.getCarsByBrand(colorId).subscribe((response=>{
      this.carDetails=response.data
      this.dataLoaded=true;
    }))
  }

}
