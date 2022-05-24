import { SubCategory } from "./subCategory.model";

export interface Category{
    _id: string;
    name: string;
    subCategories?: SubCategory[];
    updatedAt?: Date;
    createdAt?: Date;
}