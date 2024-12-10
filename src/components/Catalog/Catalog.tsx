import CategoriesList from "../List/List";
import CardList from "../CardList/CardList";
import InputSearch from "../ui/InputSearch/InputSearch";
import { useSearchParams } from "next/navigation";
import useFilters from "@/hooks/useFilters";
import { Controller } from "react-hook-form";
import { categoryService } from "@/services/category.service";

export default function Catalog() {
    const searchParams = useSearchParams();

    const { form, dataProducts } = useFilters({
        skip: Number(searchParams.get("skip")) * 6 || 0,
    });

    const { data: dataCategories } = categoryService.getAllCategory();
    
    return (
        <div className="catalog">
            <h2 className="container catalog__title text text_font-48 text_w-500">
                Каталог
            </h2>
            <form className="container catalog__filters">
                <Controller
                    control={form.control}
                    name="сategory"
                    render={({ field: { value, onChange } }) => (
                        <CategoriesList
                            dataCategories={
                                dataCategories?.categories?.categories
                            }
                            setCategorySelect={onChange}
                            categorySelect={value}
                        />
                    )}
                />
                <Controller
                    control={form.control}
                    name="search"
                    render={({ field: { value, onChange } }) => (
                        <InputSearch
                            delay={1000}
                            setSearch={onChange}
                            defaultValue={value || ""}
                        />
                    )}
                />
            </form>
            <CardList data={dataProducts?.products} />
        </div>
    );
}
