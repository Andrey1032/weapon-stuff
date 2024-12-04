import BasketCard from "@/components/BasketCard/BasketCard";
import { productService } from "@/services/product.service";
import { IProduct } from "@/shared/types/product.interface";

export default function Cart() {
    const { data }: { data: { product: IProduct } } =
        productService.getOneProducts(2);
    return (
        <div className="container cart">
            <h1 className="text text_w-500 text_font-48">Корзина</h1>
            <BasketCard product={data?.product} />
            <BasketCard product={data?.product} />
            <BasketCard total={data?.product.price} />
        </div>
    );
}
