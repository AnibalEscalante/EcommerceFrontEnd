import { Address } from "cluster";
import { Product } from "./product.model";

export interface Distribution{
  id: string;
  type: string;
  cost: number;
  amount: number;
  product: Product | null;
  address: Address | null;
  updatedAt?: Date;
  createdAt?: Date;
}