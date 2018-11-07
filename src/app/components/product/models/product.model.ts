import { Category } from '../enums/category.enum';
export interface IProductModel {
    name: string;
    description: string;
    price: number;
    isAvailable: boolean;
    category: Category;
    imageUrl: string;
}
export class ProductModel implements IProductModel {
    constructor(
        public name: string,
        public description: string,
        public imageUrl: string,
        public price: number,
        public isAvailable: boolean,
        public category: Category) {
    }
}