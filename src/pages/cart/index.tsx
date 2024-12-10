import { IProductsInBasket } from "@/shared/types/product.interface";
import { cartService } from "@/services/cart.service";
import BasketCard from "@/components/BasketCard/BasketCard";
import style from "./Cart.module.scss";
import sortProduct from "@/utils/sortProduct";

export default function Index() {
    const {
        data: dataBasket,
    }: {
        data: {
            basketForUser: {
                productsInBasket: IProductsInBasket[];
                totalCount: number;
            };
        };
    } = cartService.getUserBasket();

    return (
        <div className={`container ${style.cart}`}>
            <h1 className="text text_w-500 text_font-48">Корзина</h1>
            {sortProduct(dataBasket?.basketForUser?.productsInBasket)?.map(
                (product, id) => (
                    <BasketCard
                        key={id}
                        product={{
                            value: product.value,
                            product: product.Product,
                        }}
                    />
                )
            )}

            <BasketCard
                total={
                    dataBasket?.basketForUser?.productsInBasket?.reduce(
                        (acc, val) => acc + val.Product.price * val.value,
                        0
                    ) || "empty"
                }
            />
        </div>
    );
}
