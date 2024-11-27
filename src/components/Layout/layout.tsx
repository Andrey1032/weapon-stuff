import Footer from "../Footer/Footer";
import { inter, neuralFace } from "@/assets/fonts/fonts";
import dynamic from "next/dynamic";
import { Providers } from "../providers";

type Props = {
    children: JSX.Element;
};

const DynamicNavbar = dynamic(() => import("../Navbar/Navbar"), {
    ssr: false,
});

export default function Layout({ children }: Props) {
    return (
        <div className={`layout ${inter.variable} ${neuralFace.variable}`}>
            <Providers>
                <DynamicNavbar />
                <main>{children}</main>
                <Footer />
            </Providers>
        </div>
    );
}
