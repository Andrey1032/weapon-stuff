import { IBasket } from "./basket.interface";

export interface IOreder {
    id: number;
    login: string;
    email: string;
    password: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
    Basket: IBasket;
}
