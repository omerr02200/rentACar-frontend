import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customers:Customer[] = []

  constructor(private service:CarService) { }

  ngOnInit(): void {
    this.getCustomers()
  }

  getCustomers(){
    this.service.getCustomers().subscribe((response=>{
      this.customers = response.data
    }))
  }

}
