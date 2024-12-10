import { useQuery } from "@apollo/client";
import { allProductsQuery, oneProductQuery } from "./queries";

class ProductService {
    getAllProducts = (
        take?: number,
        skip?: number,
        search?: string,
        categoryId?: number
    ) => {
        const { loading, error, data } = useQuery(allProductsQuery, {
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
        const { loading, error, data } = useQuery(oneProductQuery, {
            variables: { id },
        });

        return { loading, error, data };
    };
}

export const productService = new ProductService();
