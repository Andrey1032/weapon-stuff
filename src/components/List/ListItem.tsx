import { ICategory } from "@/shared/types/category.interface";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/router";

export default function ListItem({ title, id }: ICategory) {
    const router = useRouter();
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const params = new URLSearchParams(searchParams);

    return (
        <button
            className={`${
                Number(searchParams.get("category")) === id
                    ? "list__item active"
                    : "list__item"
            } text .text_let-spac-2`}
            onClick={() => {
                params.set("category", String(id));
                params.set("skip", "0");
                router.replace(`${pathname}?${params.toString()}`);
            }}
        >
            {title}
        </button>
    );
}
