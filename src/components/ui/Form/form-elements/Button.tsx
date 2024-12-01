import React, { ButtonHTMLAttributes } from "react";

function Button({
    type,
    value,
    onClick,
}: ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button
            type={type}
            className="form__button text text_w-400"
            onClick={onClick}
        >
            {value}
        </button>
    );
}

export default Button;
