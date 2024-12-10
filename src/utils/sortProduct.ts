import { IProductsInBasket } from "@/shared/types/product.interface";

export default function sortProduct(productsInBasket: IProductsInBasket[]) {
    const sorted = productsInBasket?.sort(
        (a, b) =>
            new Date(a.created_at).getMinutes() -
            new Date(b.created_at).getMinutes()
    );
    return sorted;
}
