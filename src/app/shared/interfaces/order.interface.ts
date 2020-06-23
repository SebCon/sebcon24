import { Product } from './product.interface';
import { ShoppingStatus } from './shoppingStatus.interface';
import { Address } from './address.interface';

export interface Order {
    id: number;
    products: Product[];
    name?: string;
    date: Date;
    status: ShoppingStatus;
    address?: Address;
}