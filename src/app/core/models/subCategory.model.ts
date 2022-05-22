import { Product } from "./product.model";

export interface SubCategory{
    _id: string | number;
    name: string;
    products: Product[]; //Tipo product
    updatedAt?: Date;
    createdAt?: Date;
}