import { Byte } from "@angular/compiler/src/util";

export interface Car{
    carId:number,
    brandId:number,
    colorId:number,
    modelYear:Byte,
    dailyPrice:number,
    description:string
}