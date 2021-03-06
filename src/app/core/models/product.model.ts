import { Feature } from "./features.model";

export interface Product{
    id: string;
    code: string;
    brand: string;
    description: string;
    price: number;
    image: string;
    discount: number;
    features: Feature[] | null;
    updatedAt?: Date;
    createdAt?: Date;
}