import { SERVER_URL } from "@/config/api.config";
import { IProduct } from "@/shared/types/product.interface";
import Image from "next/image";
import Counter from "../Counter/Counter";
import Button from "../ui/Form/form-elements/Button";
import { cartService } from "@/services/cart.service";

interface Card {
    product?: {
        value: number;
        product: IProduct;
    };
    total?: number | "empty";
}

export default function BasketCard({ product, total }: Card) {
    const { removeProduct } = cartService.removeProductBasket();
    const { createOrder } = cartService.createOrderCart();
    if (total)
        return (
            <div className="card card_basket">
                <Button
                    disabled={total === "empty"}
                    type="button"
                    className="button_1 card__button-order text_font-20"
                    onClick={() => createOrder()}
                    value={"Оформить заказ"}
                />

                {total === "empty" ? (
                    <div className="card__order text text_font-36 text_w-500">
                        Нет товаров
                    </div>
                ) : (
                    <div className="card__order text text_font-36 text_w-500">
                        Сумма заказа:
                        <p className="card__price text text_font-48 text_w-600">
                            {total.toLocaleString("ru")} ₽
                        </p>
                    </div>
                )}
            </div>
        );

    return (
        <div className="card card_basket">
            <div className="card__info">
                <div className="card__info-tc">
                    <div className={`card__title text text_font-36 text_w-500`}>
                        {product?.product?.title}
                    </div>
                    <div
                        className={`card__caliber text text_w-400 text_font-24 text_cg`}
                    >
                        {product?.product?.caliber} мм
                    </div>
                </div>
                <Image
                    className={"card__image"}
                    src={`${SERVER_URL}/static/${product?.product?.ProductDocument[0]?.Document.url}`}
                    priority={true}
                    width={324}
                    height={110}
                    alt="product image"
                />
            </div>
            <Counter
                count={product?.value || 1}
                id={product?.product.id || 0}
            />
            <div className="card__buy">
                <div className="card__price text text_font-36 text_w-600">
                    {product?.product?.price.toLocaleString("ru")} ₽
                </div>
                <button
                    onClick={() => {
                        removeProduct({
                            variables: { productId: product?.product.id },
                        });
                    }}
                >
                    <Image
                        src={"/delete.svg"}
                        width={20}
                        height={20}
                        alt="удалить"
                    />
                </button>
            </div>
        </div>
    );
}
