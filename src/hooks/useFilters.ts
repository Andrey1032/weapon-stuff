import { productService } from "@/services/product.service";
import { allProducts } from "@/services/queries";
import { ProductsFilters } from "@/shared/types/filters.interface";
import { useQuery } from "@apollo/client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

const useFilters = ({ skip }: ProductsFilters) => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const params = new URLSearchParams(searchParams);

    const form = useForm<ProductsFilters>({
        defaultValues: {
            сategory: 1,
            search: "",
            skip: skip,
        },
    });

    const [category, search] = form.watch(["сategory", "search"]);

    useEffect(() => {
        params.set("skip", String(0));
        router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    }, [category]);

    const { data: dataProducts } = productService.getAllProducts(
        6,
        skip,
        search,
        category
    );

    return { dataProducts, form };
};
export default useFilters;
