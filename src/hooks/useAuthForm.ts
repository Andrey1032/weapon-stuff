import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";

import { authService } from "@/services/auth/auth.service";

import { IAuthForm } from "@/shared/types/auth.interface";
import { PUBLIC_URL } from "@/config/url.config";

export function useAuthForm(isReg: boolean) {
    const router = useRouter();
    const form = useForm<IAuthForm>({
        defaultValues: {
            login: "",
            password: "",
            repeat_password: "",
            email: "",
        },
        mode: "onSubmit",
    });

    const onSubmit: SubmitHandler<IAuthForm> = (data) => {
        if (isReg && data.password !== data.repeat_password) {
            return alert("Пароли не совпадают!");
        }

        authService
            .main(isReg ? "registration" : "login", data)
            .then(() => router.push(PUBLIC_URL.home()))
            .catch((e) =>
                form.setError("apiError", {
                    type: "custom",
                    message: isReg
                        ? e.response.data.message
                        : "Не удалось авторизироваться",
                })
            );
    };

    return { onSubmit, form };
}
