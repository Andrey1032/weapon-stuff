import { useQuery } from "@apollo/client";
import { allCategoriesQuery } from "./queries";

class CategoryService {
    getAllCategory = () => {
        const { loading, error, data } = useQuery(allCategoriesQuery);

        return { loading, error, data };
    };
}

export const categoryService = new CategoryService();
