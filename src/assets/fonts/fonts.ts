import localFont from "next/font/local";
import { Inter } from "next/font/google";

export const inter = Inter({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600"],
    variable: "--font-inter",
});

export const neuralFace = localFont({
    src: [
        {
            path: "./NeutralFace.otf",
            style: "normal",
            weight: "400",
        },
        {
            path: "./NeutralFace-Bold.otf",
            style: "normal",
            weight: "700",
        },
    ],
    variable: "--font-neural-face",
});
