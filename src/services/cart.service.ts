import { useQuery } from "@apollo/client";
import { userBasket } from "./queries";

class CartService {
    getUserBasket = () => {
        const { loading, error, data } = useQuery(userBasket);

        return { loading, error, data };
    };
}

export const cartService = new CartService();
