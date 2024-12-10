export const APP_URL = process.env.APP_URL as string;

export const PUBLIC_URL = {
    root: (url = "") => `${url ? url : ""}`,
    home: (query = "") => PUBLIC_URL.root(`/${query}`),
    auth: (url = "") => PUBLIC_URL.root(`/auth/${url}`),
    goods: (id = "") => PUBLIC_URL.root(`/goods/${id}`),
    cart: () => PUBLIC_URL.root(`/cart`),
};
export const PRIVATE_URL = {};
