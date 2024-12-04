import useDebounce from "@/hooks/useDebounce";
import Image from "next/image";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

type Props = {
    delay?: number;
};

export default function InputSearch({ delay }: Props) {
    const router = useRouter();
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const params = new URLSearchParams(searchParams);

    const defaultValue = searchParams.get("search");

    const [value, setValue] = useState(defaultValue);
    const debouncedValue = useDebounce(value, delay);

    useEffect(() => {
        setValue(defaultValue);
    }, [defaultValue]);

    useEffect(() => {
        if (debouncedValue !== null) {
            params.set("search", String(debouncedValue));
            params.set("skip", "0");
            router.replace(`${pathname}?${params.toString()}`);
        }
    }, [debouncedValue]);

    return (
        <div className="search-input">
            <Image
                className="search-input__icon"
                src={"/search.svg"}
                alt="person"
                width={14}
                height={14}
            />
            <input
                className="search-input__input text text_font-20 text_let-spac-2"
                type="text"
                placeholder="Поиск товаров"
                value={value || ""}
                onChange={(e) => {
                    setValue(e.target.value);
                }}
            />
        </div>
    );
}
