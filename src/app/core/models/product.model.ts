import { Feature } from "./features.model";

export interface Product{
    _id: string;
    code?:string;
    brand: string;
    description: string;
    price: string;
    image: string;
    discount?: string;
    features?: Feature[];
    updatedAt?: Date;
    createdAt?: Date;
}