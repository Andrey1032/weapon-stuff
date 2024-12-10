import { ICategory } from "@/shared/types/category.interface";
import ListItem from "./ListItem";

interface CategoriesList {
    dataCategories: ICategory[];
    categorySelect: string | number | undefined;
    setCategorySelect: (v: number) => void;
}

export default function CategoriesList({
    dataCategories,
    categorySelect,
    setCategorySelect,
}: CategoriesList) {
    return (
        <div className="list">
            {dataCategories?.map((category: ICategory) => (
                <ListItem
                    {...category}
                    key={category.id}
                    setCategorySelect={setCategorySelect}
                    active={categorySelect === category.id}
                />
            ))}
        </div>
    );
}
