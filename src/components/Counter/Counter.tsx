import { cartService } from "@/services/cart.service";
import Image from "next/image";
import React from "react";

export default function Counter({ count, id }: { count: number; id: number }) {
    const { changeProduct } = cartService.changeValueProductInBasket();
    return (
        <div className="counter">
            <button
                disabled={count === 1}
                className="counter__button"
                onClick={() =>
                    changeProduct({
                        variables: { product_id: id, value: count - 1 },
                    })
                }
            >
                <Image
                    src={"/decrease.svg"}
                    width={20}
                    height={20}
                    alt="удалить"
                />
            </button>
            <div className="text text_w-500 text_font-36">{count}</div>
            <button
                className="counter__button"
                onClick={() =>
                    changeProduct({
                        variables: { product_id: id, value: count + 1 },
                    })
                }
            >
                <Image
                    src={"/increase.svg"}
                    width={20}
                    height={20}
                    alt="добавить"
                />
            </button>
        </div>
    );
}
