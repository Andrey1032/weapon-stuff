import useDebounce from "@/hooks/useDebounce";
import Image from "next/image";
import { useEffect, useState } from "react";
import style from "./InputSearch.module.scss";
type Props = {
    delay?: number;
    setSearch: (v: string) => void;
    defaultValue: string;
};

export default function InputSearch({ delay, setSearch, defaultValue }: Props) {
    const [value, setValue] = useState(defaultValue);
    const debouncedValue = useDebounce(value, delay);

    useEffect(() => {
        if (debouncedValue !== null) {
            setSearch(debouncedValue);
        }
    }, [debouncedValue]);

    return (
        <div className={style["search-input"]}>
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
