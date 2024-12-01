import { ICategory } from "@/shared/types/category.interface";
import React from "react";
import ListItem from "./ListItem";
import { categoryService } from "@/services/category.service";

export default function CategoriesList() {
    const { data } = categoryService.getAllCategory();

    return (
        <div className="list container">
            {data?.categories?.categories?.map((category: ICategory) => (
                <ListItem {...category} key={category.id} />
            ))}
        </div>
    );
}
