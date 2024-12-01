import CategoriesList from "../List/List";
import CardList from "../CardList/CardList";
import InputSearch from "../ui/InputSearch/InputSearch";
export default function Catalog() {
    return (
        <div className="catalog">
            <h2 className="container catalog__title text text_font-48 text_w-500">
                Каталог
            </h2>
            <CategoriesList />
            <div className="container">
                <InputSearch delay={1000} />
            </div>
            <CardList />
        </div>
    );
}
