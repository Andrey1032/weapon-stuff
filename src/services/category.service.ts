import { useQuery } from "@apollo/client";
import { allCategories } from "./queries";

class CategoryService {
    getAllCategory = () => {
        const { loading, error, data } = useQuery(allCategories);

        return { loading, error, data };
    };
}

export const categoryService = new CategoryService();
