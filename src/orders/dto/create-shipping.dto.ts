import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateShippinDto{
    @IsNotEmpty({message:'phone canot be empty'})
    @IsString({message:'Phone format should be a string'})
    phone:string;

    @IsOptional()
    @IsString({message:'Name should be string'})
    name:string;

    @IsNotEmpty({message:'adddess can not be empty'})
    @IsString({message:'address should eb a string'})
    address:string;

    @IsNotEmpty({message:'city can not be empty'})
    @IsString({message:'city should eb a string'})
    city:string;

    @IsNotEmpty({message:'postcode can not be empty'})
    @IsString({message:'postcode should eb a string'})
    postCode:string;

    @IsNotEmpty({message:'state can not be empty'})
    @IsString({message:'state should eb a string'})
    state:string;

    @IsNotEmpty({message:'country can not be empty'})
    @IsString({message:'country should eb a string'})
    country:string;
}