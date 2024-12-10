import { useMutation, useQuery } from "@apollo/client";
import {
    addProductToBasketQuery,
    changeValueProductInBasketQuery,
    removeProductFromBasketQuery,
    userBasketQuery,
    createOrderQuery,
} from "./queries";

class CartService {
    getUserBasket = () => {
        const { loading, error, data } = useQuery(userBasketQuery);

        return { loading, error, data };
    };

    addProductBasket = () => {
        const [addProduct] = useMutation(addProductToBasketQuery);

        return { addProduct };
    };
    removeProductBasket = () => {
        const [removeProduct] = useMutation(removeProductFromBasketQuery, {
            refetchQueries: [userBasketQuery],
        });

        return { removeProduct };
    };
    changeValueProductInBasket = () => {
        const [changeProduct] = useMutation(changeValueProductInBasketQuery, {
            refetchQueries: [userBasketQuery],
        });

        return { changeProduct };
    };

    createOrderCart = () => {
        const [createOrder] = useMutation(createOrderQuery, {
            refetchQueries: [userBasketQuery],
        });

        return { createOrder };
    };
}

export const cartService = new CartService();
