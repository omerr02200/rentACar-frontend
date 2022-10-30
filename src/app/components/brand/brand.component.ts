import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  brands:Brand[]=[]
  currentBrand:Brand;

  constructor(private service:CarService) { }

  ngOnInit(): void {
    this.getBrands()
  }

  getBrands(){
    this.service.getBrands().subscribe((response=>{
      this.brands=response.data
    }))
  }

  setCurrentBrand(brand:Brand){
    this.currentBrand=brand
  }

  getCurrentBrandClass(brand:Brand){
    if(this.currentBrand==brand){
      return "list-group-item active"
    }else{
      return "list-group-item"
    }
  }

  getAllBrandClass(){
    if(!this.currentBrand){
      return "list-group-item active"
    }else{
      return "list-group-item"
    }
  }

}
