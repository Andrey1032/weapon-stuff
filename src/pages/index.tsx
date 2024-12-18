import Head from "next/head";
import Main from "../components/Main/Main";

export default function Home() {
    return (
        <>
            <Head>
                <title>Weapon Stuff</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
            </Head>
            <Main />
        </>
    );
}
