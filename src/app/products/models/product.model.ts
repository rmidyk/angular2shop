import { Category } from '../enums/category.enum';
export interface IProductModel {
    id: number;
    name: string;
    description: string;
    price: number;
    isAvailable: boolean;
    category: string;
    imageUrl: string;
}
export class ProductModel implements IProductModel {
    public id: number;
    public name: string;
    public description: string;
    public imageUrl: string;
    public price: number;
    public isAvailable: boolean;
    public category: string;
}