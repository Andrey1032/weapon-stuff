
import "@/assets/styles/globals.scss";
import type { AppProps } from "next/app";
import { Providers } from "@/providers/providers";
import Layout from "@/components/Layout/layout";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <Providers>
            <Layout>
                <Component {...pageProps} />
            </Layout>
                
        </Providers>
    );
}
