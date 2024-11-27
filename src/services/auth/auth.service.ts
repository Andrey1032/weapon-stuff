import { axiosClassic } from "@/api/api.interceptors";
import { API_URL } from "@/config/api.config";
import { IAuthForm, IAuthResponse } from "@/shared/types/auth.interface";
import {
    EnumTokens,
    removeFromStorage,
    saveTokenStorage,
} from "./auth-token.service";

class AuthService {
    async main(type: "login" | "registration", data: IAuthForm) {
        const response = await axiosClassic<IAuthResponse>({
            url: API_URL.auth(`/${type}`),
            method: "POST",
            data,
        });

        saveTokenStorage(EnumTokens.ACCESS_TOKEN, response.data?.refresh_token);
        saveTokenStorage(EnumTokens.ACCESS_TOKEN, response.data?.refresh_token);

        return response;
    }

    async getNewTokens() {
        const response = await axiosClassic<IAuthResponse>({
            url: API_URL.auth(`/refresh`),
            method: "POST",
        });

        saveTokenStorage(EnumTokens.ACCESS_TOKEN, response.data?.refresh_token);
        saveTokenStorage(EnumTokens.ACCESS_TOKEN, response.data?.refresh_token);

        return response;
    }

    logout() {
        return removeFromStorage([
            EnumTokens.ACCESS_TOKEN,
            EnumTokens.REFRESH_TOKEN,
        ]);
    }

}

export const authService = new AuthService();
