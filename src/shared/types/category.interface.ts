import { IProduct } from "./product.interface";

export interface ICategory {
    id: number;
    title: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
    Product: IProduct[];
}
