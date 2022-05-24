import { Product } from "./product.model";

export interface SubCategory{
    _id: string;
    name: string;
    products: Product[]; //Tipo product
    updatedAt?: Date;
    createdAt?: Date;
}