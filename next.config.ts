import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        
        remotePatterns: [
            {
                protocol: "https",
                hostname: "trainess-api.dev-vt2b.ru",
                port: "",
                pathname: "/static/**",
            },
        ],
    },
    env: {
        APP_ENV: process.env.APP_ENV,
        APP_URL: process.env.APP_URL,
        APP_DOMAIN: process.env.APP_DOMAIN,
        SERVER_URL: process.env.SERVER_URL,
    },
};

export default nextConfig;
