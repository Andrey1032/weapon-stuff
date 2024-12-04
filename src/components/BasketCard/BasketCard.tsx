import { SERVER_URL } from "@/config/api.config";
import { IProduct } from "@/shared/types/product.interface";
import Image from "next/image";
import Counter from "../Counter/Counter";
import Button from "../ui/Form/form-elements/Button";

interface Card {
    product?: IProduct;
    total?: number;
}

export default function BasketCard({ product, total }: Card) {
    if (total)
        return (
            <div className="card card_basket">
                <Button
                    type="button"
                    className="button_1 card__button-order text_font-20"
                    onClick={() => {}}
                    value={"Оформить заказ"}
                />

                <div className="card__order text text_font-36 text_w-500">
                    Сумма заказа:{" "}
                    <p className="card__price text text_font-48 text_w-600">
                        {total.toLocaleString("ru")} ₽
                    </p>
                </div>
            </div>
        );

    return (
        <div className="card card_basket">
            <div className="card__info">
                <div className="card__info-tc">
                    <div className={`card__title text text_font-36 text_w-500`}>
                        {product?.title}
                    </div>
                    <div
                        className={`card__caliber text text_w-400 text_font-24 text_cg`}
                    >
                        {product?.caliber} мм
                    </div>
                </div>
                <Image
                    className={"card__image"}
                    src={`${SERVER_URL}/static/${product?.ProductDocument[0]?.Document.url}`}
                    priority={true}
                    width={324}
                    height={110}
                    alt="product image"
                />
            </div>
            <Counter count={1} />
            <div className="card__buy">
                <div className="card__price text text_font-36 text_w-600">
                    {product?.price.toLocaleString("ru")} ₽
                </div>
                <Image
                    src={"/delete.svg"}
                    width={20}
                    height={20}
                    alt="удалить"
                />
            </div>
        </div>
    );
}
