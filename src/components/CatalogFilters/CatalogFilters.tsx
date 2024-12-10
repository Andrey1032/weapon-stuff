import React from "react";
import List from "../List/List";
import InputSearch from "../ui/InputSearch/InputSearch";

export default function CatalogFilters() {
    return (
        <form className="container catalog__filters">
            <List />
            <InputSearch delay={1000} />
        </form>
    );
}
