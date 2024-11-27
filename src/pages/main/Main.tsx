// import { productService } from "@/services/product.service";
// import { IProduct } from "@/shared/types/product.interface";

export default function Main() {
    // const { loading, error, data } = productService.getAllProducts();

    // if (loading) return <p>Loading...</p>;
    // if (error) return <p>Error : {error.message}</p>;

    return (
        <div className="main">
            <div className="main__header">
                <div className="card card_large"></div>
            </div>
            <div className="catalog">
                <h2 className="catalog__title">Каталог</h2>
                <div className="categories"></div>
                <input className="search" />
                <div className="catalog__card-list">
                    <div className="card"></div>
                </div>
            </div>
        </div>
    )
}
