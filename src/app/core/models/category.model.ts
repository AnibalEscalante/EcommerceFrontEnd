import { SubCategory } from "./subCategory.model";

export interface Category{
    id: string;
    name: string;
    subCategories: SubCategory[] | null;
    updatedAt?: Date;
    createdAt?: Date;
}