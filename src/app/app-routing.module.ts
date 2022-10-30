import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarDetailPageComponent } from './components/car-detail-page/car-detail-page.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';

const routes: Routes = [
  {path:"",pathMatch:"full",component:CarDetailComponent},
  {path:"cars", component:CarDetailComponent},
  {path:"cars/brands/:brandId", component:CarDetailComponent},
  {path:"cars/colors/:colorId", component:CarDetailComponent},
  {path:"cars/getcardetailsbyid/:carId", component:CarDetailPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
