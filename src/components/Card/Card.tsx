import { SERVER_URL } from "@/config/api.config";
import { PUBLIC_URL } from "@/config/url.config";
import { IProduct } from "@/shared/types/product.interface";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

interface Card {
    product: IProduct;
    large?: boolean;
}

export default function Card({ product, large }: Card) {
    const router = useRouter();
    return (
        <div
            className={`${large && "card_large"} card`}
            onClick={() => router.push(PUBLIC_URL.goods(`${product.id}`))}
        >
            <Image
                className={!large ? "card__image" : "card__image large"}
                src={`${SERVER_URL}/static/${product?.ProductDocument[0]?.Document.url}`}
                priority={true}
                width={398}
                height={134}
                alt="product image"
            />
            <div className="card__category text text_let_spa-2">
                {product?.Category?.title}
            </div>
            <div className="card__info">
                <div className="card__info-tc">
                    <div
                        className={`card__title ${
                            large
                                ? "text text_font-96 text_w-700 text_family-neural"
                                : "card__title_subtitle text text_font-20 text_w-500 "
                        }`}
                    >
                        {product?.title}
                    </div>
                    <div
                        className={`card__caliber text text_w-400  ${
                            large ? "text_font-20" : "text_cg"
                        }`}
                    >
                        {large ? product?.description : product?.caliber}
                    </div>
                </div>
                <div className="card__price text text_font-36 text_w-600">
                    {large && (
                        <span className="text text_w-400 text_font-24">
                            от{" "}
                        </span>
                    )}
                    {product?.price.toLocaleString("ru")} ₽
                </div>
            </div>
        </div>
    );
}
