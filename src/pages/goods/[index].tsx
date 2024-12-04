import dynamic from "next/dynamic";

const DynamicGoods = dynamic(() => import("./Goods"), {
    ssr: false,
});

export default function Index() {
    return <DynamicGoods />;
}
