import Card from "@/components/Card/Card";
import Catalog from "@/components/Catalog/Catalog";
import { productService } from "@/services/product.service";
import style from "./Main.module.scss"

export default function Home() {
    const { data: mainProduct } = productService.getOneProducts(1);
    return (
        <div className={style.home}>
            <div className="container">
                <Card product={mainProduct?.product} large />
            </div>
            <Catalog />
        </div>
    );
}
