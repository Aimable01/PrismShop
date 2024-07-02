import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateReviewDto {
    @IsNotEmpty({message:'Product should not be empty'})
    @IsNumber({},{message:'Product Id should not be string'})
    productId:number;

    @IsNotEmpty({message:'rationg should not be empty'})
    @IsNumber()
    ratings:number;
    @IsNotEmpty({message:'comment should not be empty'})
    @IsString()
    comment:string;
}

