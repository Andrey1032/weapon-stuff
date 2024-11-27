import { useQuery } from "@apollo/client";
import { allProducts, oneProduct } from "./queries";

class ProductService {
    getAllProducts = () => {
        const { loading, error, data } = useQuery(allProducts);

        return { loading, error, data };
    };
    getOneProducts = (id: number) => {
        const { loading, error, data } = useQuery(oneProduct, {
            variables: { id },
        });

        return { loading, error, data };
    };
}

export const productService = new ProductService();
