import { IProduct } from "@/shared/types/product.interface";
import React from "react";
import Card from "../Card/Card";
import Pagination from "../Pagination/Pagination";

export default function CardList({
    data,
}: {
    data: { products: IProduct[]; totalCount: number };
}) {
    return (
        <>
            <div className="card-list container">
                {data?.products?.map((prod: IProduct) => (
                    <Card product={prod} key={prod.id} />
                ))}
            </div>
            <Pagination
                count={Math.ceil(data?.totalCount / 6) || 1}
            />
        </>
    );
}
