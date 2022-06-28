import { Address } from "./address.model";
import { Product } from "./product.model";
import { Reciever } from "./receiver.model";

export interface Distribution{
  id: string;
  type: string;
  cost: number;
  amount: number;
  product: Product | null;
  address: Address | null;
  receiver: Reciever | null;
  date: Date | null;
  updatedAt?: Date;
  createdAt?: Date;
}