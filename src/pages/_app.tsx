import "@/assets/styles/globals.scss";
import type { AppProps } from "next/app";
import Layout from "../components/Layout/layout";
import { Providers } from "@/components/providers";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <Providers>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </Providers>
    );
}
