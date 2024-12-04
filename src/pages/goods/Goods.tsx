import Button from "@/components/ui/Form/form-elements/Button";
import { EnumTokens } from "@/services/auth/auth-token.service";
import { productService } from "@/services/product.service";
import { IProduct } from "@/shared/types/product.interface";
import { useParams, useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { PUBLIC_URL } from "@/config/url.config";
import ImagesViewer from "@/components/ImagesViewer/ImagesViewer";
import Options from "@/components/Options/Options";

const Goods = () => {
    const isCookieAccess = Cookies.get(EnumTokens.ACCESS_TOKEN);
    const router = useRouter();
    const idProduct = Number(useParams()?.index);

    const { data }: { data: { product: IProduct }; loading: boolean } =
        productService.getOneProducts(idProduct);

    return (
        <div className="goods">
            <div className="container">
                <ImagesViewer
                    ProductDocument={data?.product?.ProductDocument}
                />
            </div>
            <div className="goods__content">
                <div className="container">
                    <div className="goods__info">
                        <h1 className="text text_w-500 text_font-48">
                            {data?.product?.title}
                        </h1>
                        <div className="goods__price">
                            <div className="text text_font-48 text_w-600">
                                {data?.product?.price.toLocaleString("ru")} ₽
                            </div>
                            <Button
                                className="button_1 goods__button text_font-20"
                                type="button"
                                value={"Добавить в корзину"}
                                onClick={() => {
                                    if (!isCookieAccess)
                                        router.push(PUBLIC_URL.auth("signIn"));
                                }}
                            />
                        </div>
                    </div>
                </div>

                <div className="container">
                    <Options {...data?.product} />
                </div>
            </div>
        </div>
    );
};

export default Goods;
