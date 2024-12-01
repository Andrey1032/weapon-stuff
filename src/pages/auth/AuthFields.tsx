import Input from "@/components/ui/Form/form-elements/Input";
import { IAuthForm } from "@/shared/types/auth.interface";
import { Controller, UseFormReturn } from "react-hook-form";

interface AuthFieldsProps {
    form: UseFormReturn<IAuthForm, unknown, undefined>;
    isReg?: boolean;
}

export function AuthFields({ form, isReg = false }: AuthFieldsProps) {
    return (
        <>
            {isReg ? (
                <>
                    <Controller
                        control={form.control}
                        name="email"
                        rules={{ required: true }}
                        render={({ field }) => (
                            <Input
                                field={field}
                                type="email"
                                placeholder="Почта"
                                errors={form.formState.errors}
                                name={field.name}
                            />
                        )}
                    />
                    <Controller
                        control={form.control}
                        name="login"
                        rules={{
                            required: true,
                            minLength: {
                                value: 4,
                                message: "Минимальная длина логина 4 символа",
                            },
                        }}
                        render={({ field }) => (
                            <Input
                                field={field}
                                placeholder="Логин"
                                errors={form.formState.errors}
                                name={field.name}
                            />
                        )}
                    />
                    <Controller
                        control={form.control}
                        name="password"
                        rules={{
                            required: true,
                            minLength: {
                                value: 4,
                                message: "Минимальная длина пароля 4 символа",
                            },
                        }}
                        render={({ field }) => (
                            <Input
                                field={field}
                                type="password"
                                placeholder="Пароль"
                                autoComplete="new-password"
                                errors={form.formState.errors}
                                name={field.name}
                            />
                        )}
                    />
                    <Controller
                        control={form.control}
                        name="repeat_password"
                        rules={{
                            required: true,
                            minLength: {
                                value: 4,
                                message: "Минимальная длина пароля 4 символа",
                            },
                        }}
                        render={({ field }) => (
                            <Input
                                field={field}
                                type="password"
                                placeholder="Повторите пароль"
                                autoComplete="new-password"
                                errors={form.formState.errors}
                                name={field.name}
                            />
                        )}
                    />
                </>
            ) : (
                <>
                    <Controller
                        control={form.control}
                        name="login"
                        rules={{
                            required: true,
                        }}
                        render={({ field }) => (
                            <Input
                                field={field}
                                placeholder="Логин"
                                autoComplete="username"
                                errors={form.formState.errors}
                                name={field.name}
                            />
                        )}
                    />
                    <Controller
                        control={form.control}
                        name="password"
                        rules={{
                            required: true,
                        }}
                        render={({ field }) => (
                            <Input
                                field={field}
                                type="password"
                                placeholder="Пароль"
                                autoComplete="current-password"
                                errors={form.formState.errors}
                                name={field.name}
                            />
                        )}
                    />
                </>
            )}
        </>
    );
}
