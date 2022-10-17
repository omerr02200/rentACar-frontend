import { Component, OnInit } from '@angular/core';
import { Color } from 'src/app/models/color';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {

  colors:Color[] = [];

  constructor(private carService:CarService) { }

  ngOnInit(): void {
    this.getColors()
  }

  getColors(){
    this.carService.getColors().subscribe((response=>{
      this.colors = response.data
    }))
  }

}
