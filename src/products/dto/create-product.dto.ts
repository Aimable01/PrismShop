import { IsArray, IsNotEmpty, IsNumber, IsPositive, IsString, Min } from "class-validator";

export class CreateProductDto {
    @IsNotEmpty({message:'Title can not be blank'})
    @IsString()
    title:string;

    @IsNotEmpty({message:'Description can not be blank'})
    @IsString()
    description:string;

    @IsNotEmpty({message:'price cannot be empty'})
    @IsNumber({maxDecimalPlaces:2},{message:'price should  be number &max decimal precission 2'})
    @IsPositive({message:'Price should be positive number'})
    price:number;

    @IsNotEmpty({message:'stock should not be empty'})
    @IsNumber({},{message:'stocke should be a number'})
    @Min(0,{message:'stock can not be negative.'})
    stock:number;

    @IsNotEmpty({message:'Images should not be empty'})
    @IsArray({message:'images should be in array formart'})
    images:string[];

    @IsNotEmpty({message:'category cannot be empty'})
    @IsNumber({},{message:'category id should be a number'})
    categoryId:number;
}
