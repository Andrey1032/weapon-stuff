import { ICategory } from "@/shared/types/category.interface";

interface ListItem extends ICategory {
    setCategorySelect: (v: number) => void;
    active: boolean;
}

export default function ListItem({
    title,
    id,
    setCategorySelect,
    active,
}: ListItem) {
    return (
        <button
            type="button"
            className={`${
                active ? "list__item active" : "list__item"
            } text .text_let-spac-2`}
            onClick={() => setCategorySelect(id)}
        >
            {title}
        </button>
    );
}
