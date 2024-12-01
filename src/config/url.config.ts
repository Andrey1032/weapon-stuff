export const APP_URL = process.env.APP_URL as string;

export const PUBLIC_URL = {
    root: (url = "") => `${url ? url : ""}`,
    main: (query = "?category=1&search=&skip=0") =>
        PUBLIC_URL.root(`/main${query}`),
    auth: (url = "") => PUBLIC_URL.root(`/auth/${url}`),
    goods: (id = "") => PUBLIC_URL.root(`/goods/${id}`),
    cart: () => PUBLIC_URL.root(`/cart`), /// как передавать
};
export const PRIVATE_URL = {};
