import "./style.css"
import Link from "next/link"
import Image from "next/image"
import { AtalhoInterface } from "@/interface/atalhos.interface"
export default function Atalhos(props: { atalhos: AtalhoInterface[] }) {
    return (
        <div className="BoxAtalhos">
            {props.atalhos.map((objeto) => (
                <Link className="LinksAtalho" key={objeto.key} href={`/${objeto.nomeUrl}`}>
                    <div className="BoxObjetoAtalho">
                        <Image src={objeto.url} alt={objeto.nomeUrl} width={0} height={0}
                            style={{ width: '40px', height: "40px" }} />
                               <h5>{objeto.nome}</h5>
                    </div>
                </Link>
            ))}
        </div>
    )
}