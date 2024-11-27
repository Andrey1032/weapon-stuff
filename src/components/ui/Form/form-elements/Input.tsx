import { IAuthForm } from "@/shared/types/auth.interface";
import { ErrorMessage } from "@hookform/error-message";
import { HTMLInputAutoCompleteAttribute } from "react";
import { ControllerRenderProps, FieldErrors } from "react-hook-form";

interface IInput {
    field:
        | ControllerRenderProps<IAuthForm, "email">
        | ControllerRenderProps<IAuthForm, "login">
        | ControllerRenderProps<IAuthForm, "password">
        | ControllerRenderProps<IAuthForm, "repeat_password">;
    className: string;
    type?: string;
    placeholder: string;
    onClick?: () => void;
    errors?: FieldErrors<IAuthForm>;
    name?: keyof IAuthForm;
    autoComplete?: HTMLInputAutoCompleteAttribute;
}

export default function Input({
    field,
    className,
    type = "text",
    placeholder,
    onClick,
    errors,
    name,
    autoComplete,
}: IInput) {
    return (
        <>
            <input
                {...field}
                className={className}
                type={type}
                placeholder={placeholder}
                autoComplete={autoComplete}
                onClick={onClick}
            />
            {errors && <ErrorMessage errors={errors} name={name} />}
        </>
    );
}
