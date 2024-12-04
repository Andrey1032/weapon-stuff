import { IProduct } from "@/shared/types/product.interface";

export default function Options({ ...product }: IProduct) {
    return (
        <ul className="goods__options options">
            {product?.description && (
                <li className="options__item">
                    <h2 className="text text_w-500 text-font-24">Описание</h2>
                    <p className="text text_w-400">{product?.description}</p>
                </li>
            )}
            {product?.magazine && (
                <li className="options__item">
                    <h2 className="text text_w-500 text-font-20">Магазин</h2>
                    <p className="text text_w-400">
                        {product?.magazine} патронов
                    </p>
                </li>
            )}
            {product?.caliber && (
                <li className="options__item">
                    <h2 className="text text_w-500 text-font-20">Калибр</h2>
                    <p className="text text_w-400">{product?.caliber}</p>
                </li>
            )}
            {product?.barrel_length && (
                <li className="options__item">
                    <h2 className="text text_w-500 text-font-20">
                        длина ствола
                    </h2>
                    <p className="text text_w-400">
                        {product?.barrel_length} мм
                    </p>
                </li>
            )}
        </ul>
    );
}
