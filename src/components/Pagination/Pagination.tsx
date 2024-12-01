import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import React from "react";

interface Pagination {
    count: number;
}

export default function Pagination({ count }: Pagination) {
    const router = useRouter();
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const params = new URLSearchParams(searchParams);
    return (
        <div className="list list_pagination container">
            {new Array(count).fill(0).map((v, id) => (
                <button
                    className={`
                        ${
                            Number(searchParams.get("skip")) === id
                                ? "list__item list__item_pagination active"
                                : "list__item list__item_pagination"
                        } text .text_let-spac-2`}
                    key={id}
                    onClick={() => {
                        params.set("skip", String(id));
                        router.replace(`${pathname}?${params.toString()}`);
                    }}
                >
                    {id + 1}
                </button>
            ))}
        </div>
    );
}
