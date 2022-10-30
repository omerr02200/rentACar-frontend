import { Byte } from "@angular/compiler/src/util";

export interface CarDetail{
    carId:number,
    brandName:number,
    colorName:number,
    modelYear:Byte,
    description:string,
    dailyPrice:number
    imagePath:string[]
}