import React, { ButtonHTMLAttributes } from "react";

function Button({
    className,
    type,
    value,
    onClick,
}: ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button type={type} className={className} onClick={onClick}>
            {value}
        </button>
    );
}

export default Button;
