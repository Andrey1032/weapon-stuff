import { IBasket } from "./basket.interface";
import { ICategory } from "./category.interface";
import { IDocument } from "./document.interface";

export interface IProduct {
    id: number;
    title: string;
    description: string;
    price: number;
    magazine: number;
    caliber: string;
    article: string;
    barrel_length: number;
    category_id: number;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
    Category: ICategory;
    ProductDocument: IProductDocument[];
    ProductsInBasket: IProductsInBasket[];
}

export interface IProductDocument {
    product_id: number;
    document_id: number;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
    Document: IDocument;
    Product: IProduct;
}

export interface IProductsInBasket {
    basket_id: number;
    product_id: number;
    value: number;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
    Basket: IBasket;
    Product: IProduct;
}
