import { Component, OnInit } from '@angular/core';
import { RentalDetail } from 'src/app/models/rentalDetail';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-rental-detail',
  templateUrl: './rental-detail.component.html',
  styleUrls: ['./rental-detail.component.css']
})
export class RentalDetailComponent implements OnInit {

  rentalDetails:RentalDetail[]=[]

  constructor(private service:CarService) { }

  ngOnInit(): void {
    this.getRentalDetails()
  }

  getRentalDetails(){
    this.service.getRentalDetails().subscribe((response=>{
      this.rentalDetails=response.data;
    }))
  }
}
