import { useParams } from "next/navigation";

export default function Goods() {
    const idProduct = useParams()?.index;
    return <div>Goods {idProduct}</div>;
}
