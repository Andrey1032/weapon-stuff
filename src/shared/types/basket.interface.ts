import { IOreder } from "./order.interface";
import { IProductsInBasket } from "./product.interface";
import { IUser } from "./user.interface";

export interface IBasket {
    id: number;
    user_id: number;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
    User: IUser;
    ProductsInBasket: IProductsInBasket[];
    Order: IOreder[];
}
