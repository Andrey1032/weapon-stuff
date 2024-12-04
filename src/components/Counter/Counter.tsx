import Image from "next/image";
import React from "react";

export default function Counter({ count }: { count: number }) {
    return (
        <div className="counter">
            <button className="counter__button">
                <Image
                    src={"/decrease.svg"}
                    width={20}
                    height={20}
                    alt="удалить"
                />
            </button>
            <div className="text text_w-500 text_font-36">{count}</div>
            <button className="counter__button">
                <Image
                    src={"/increase.svg"}
                    width={20}
                    height={20}
                    alt="добавить"
                />
            </button>
        </div>
    );
}
