import { SERVER_URL } from "@/config/api.config";
import { IProductDocument } from "@/shared/types/product.interface";
import Image from "next/image";
import { useState } from "react";

interface ImagesViewer {
    ProductDocument: IProductDocument[];
}

export default function ImagesViewer({ ProductDocument }: ImagesViewer) {
    const [selectDocument, setSelectDocument] = useState(0);

    return (
        <div className="images-viewer">
            <div className="images-viewer__list">
                {ProductDocument?.map((img, id) => (
                    <Image
                        className={`images-viewer__list-item ${
                            id === selectDocument && "active"
                        }`}
                        key={id}
                        src={`${SERVER_URL}/static/${ProductDocument[id]?.Document.url}`}
                        priority={true}
                        loading="eager"
                        width={140}
                        height={84}
                        alt="product image"
                        onClick={() => setSelectDocument(id)}
                    />
                ))}
            </div>
            <Image
                className="images-viewer__image"
                src={`${SERVER_URL}/static/${
                    ProductDocument?.at(selectDocument)?.Document.url
                }`}
                priority={true}
                width={1090}
                height={368}
                alt="product image"
            />
        </div>
    );
}
