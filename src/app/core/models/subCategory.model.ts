import { Product } from "./product.model";

export interface SubCategory{
    id: string;
    name: string;
    products: Product[] | null;
    updatedAt?: Date;
    createdAt?: Date;
}