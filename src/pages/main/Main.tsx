import Card from "@/components/Card/Card";
import Catalog from "@/components/Catalog/Catalog";
import { productService } from "@/services/product.service";

export default function Main() {
    const { data: mainProduct } = productService.getOneProducts(1);
    return (
        <div className="main">
            <div className="main__header container">
                <Card product={mainProduct?.product} large />
            </div>
            <Catalog />
        </div>
    );
}
