import { ValidateNested } from "class-validator";
import { CreateShippinDto } from "./create-shipping.dto";
import { Type } from "class-transformer";
import { OrderedProductsDto } from "./ordered-products.dto";

export class CreateOrderDto {
    @Type(()=>CreateShippinDto)
    @ValidateNested()
    shippingAddress:CreateShippinDto;

    @Type(()=>OrderedProductsDto)
    @ValidateNested()
    orderedProducts:OrderedProductsDto[];

}
