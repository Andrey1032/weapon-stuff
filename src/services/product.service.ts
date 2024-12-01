import { useQuery } from "@apollo/client";
import { allProducts, oneProduct } from "./queries";

class ProductService {
    getAllProducts = (
        take?: number,
        skip?: number,
        search?: string,
        categoryId?: number
    ) => {
        const { loading, error, data } = useQuery(allProducts, {
            variables: {
                take: take,
                skip: skip,
                search: search,
                categoryId: categoryId,
            },
        });

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
