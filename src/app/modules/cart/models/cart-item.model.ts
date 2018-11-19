import { IProductModel } from '../../product/models/product.model';

export class CartItem {
    quantity: number;
    product: IProductModel;
}