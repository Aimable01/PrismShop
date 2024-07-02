import { IsNotEmpty, IsNumber, IsPositive } from "class-validator";

export class OrderedProductsDto{
    @IsNotEmpty({message:'Product cannot be empty'})
    id:number;

    @IsNumber({maxDecimalPlaces:2},{message:'price should be number with ma decimal precission 2'})
    @IsPositive({message:'Price cannot be negative'})
    product_unit_price:number;

    @IsNumber({maxDecimalPlaces:2},{message:'Quantity should be number'})
    @IsPositive({message:'Quantity cannot be negative'})
    product_quantity:number;
}