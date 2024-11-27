"use client";

import { AuthFields } from "@/pages/auth/AuthFields";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { API_URL } from "@/config/api.config";
import { useAuthForm } from "@/hooks/useAuthForm";
import Button from "@/components/ui/Form/form-elements/Button";
import { ErrorMessage } from "@hookform/error-message";

export default function Index() {
    const router = useRouter();
    const { onSubmit, form } = useAuthForm(false);

    return (
        <div className="auth">
            <form onSubmit={form.handleSubmit(onSubmit)} className="form">
                <h1 className="form__title">Вход в аккаунт</h1>

                <AuthFields form={form} isReg={false} />
                <ErrorMessage errors={form.formState.errors} name="apiError" />

                <button type="button" className="form__button-notpass">
                    Не помню пароль
                </button>
                <div className="form__buttons">
                    <Button
                        className="form__button"
                        type="submit"
                        value="Войти"
                        onClick={() => form.clearErrors("apiError")}
                    />
                    <Button
                        className="form__button"
                        type="button"
                        value="Зарегистрироваться"
                        onClick={() => router.push(API_URL.auth("/signUp"))}
                    />
                </div>

                <div>
                    <p className="form__info text text_w-300 text_font-14 ">
                        <span>
                            Нажимая &quot;Войти&quot; или
                            &quot;Зарегистрироваться&quot; вы подтверждаете свое
                            согласие c
                        </span>
                        <Link className="link text_und-line" href={""}>
                            Пользовательским соглашением
                        </Link>
                        , 
                        <Link className="link text_und-line" href={""}>
                            Политикой конфиденциальности
                        </Link>
                        , и 
                        <Link className="link text_und-line" href={""}>
                            Правилами программы лояльности
                        </Link>
                        .
                    </p>
                </div>
            </form>
        </div>
    );
}
