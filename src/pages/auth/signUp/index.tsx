"use client";

import { AuthFields } from "@/pages/auth/AuthFields";
import { API_URL } from "@/config/api.config";
import { useRouter } from "next/navigation";
import { useAuthForm } from "@/hooks/useAuthForm";
import ConsentBlock from "@/components/ui/Form/form-elements/ConsentBlock";
import Button from "@/components/ui/Form/form-elements/Button";
import { ErrorMessage } from "@hookform/error-message";

export default function Auth() {
    const router = useRouter();
    const { onSubmit, form } = useAuthForm(true);

    return (
        <div className="auth">
            <form onSubmit={form.handleSubmit(onSubmit)} className="form">
                <h1 className="form__title text text_font-36 text_w-500">
                    Регистрация
                </h1>
                <AuthFields form={form} isReg={true} />
                <ErrorMessage errors={form.formState.errors} name="apiError" />
                <div className="form__buttons">
                    <Button
                        className="button_1"
                        type="submit"
                        value="Зарегистрироваться"
                    />
                    <Button
                        className="button_2"
                        type="button"
                        value="Войти в аккаунт"
                        onClick={() => router.push(API_URL.auth("/signIn"))}
                    />
                </div>
                <ConsentBlock />
            </form>
        </div>
    );
}
