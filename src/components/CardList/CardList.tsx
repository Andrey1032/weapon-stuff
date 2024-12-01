import { IProduct } from "@/shared/types/product.interface";
import React from "react";
import Card from "../Card/Card";
import { useSearchParams } from "next/navigation";
import { productService } from "@/services/product.service";
import Pagination from "../Pagination/Pagination";

export default function CardList() {
    const searchParams = useSearchParams();

    const { data } = Number(searchParams.get("category"))
        ? productService.getAllProducts(
              6,
              Number(searchParams.get("skip")) * 6 || 0,
              searchParams.get("search") || "",
              Number(searchParams.get("category"))
          )
        : productService.getAllProducts(6, 0, searchParams.get("search") || "");

    return (
        <>
            <div className="card-list container">
                {data?.products?.products?.map((prod: IProduct) => (
                    <Card product={prod} key={prod.id} />
                ))}
            </div>
            <Pagination
                count={Math.ceil(data?.products?.totalCount / 6) || 1}
            />
        </>
    );
}
