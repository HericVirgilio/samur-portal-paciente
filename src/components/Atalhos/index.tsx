import "./style.css"
import Link from "next/link"
import Image from "next/image"
import { AtalhoInterface } from "@/interface/atalhos.interface"
export default function Atalhos( props: { atalhos: AtalhoInterface []}){
    return(
        <div className="BoxAtalhos">
            {props.atalhos.map((objeto) => (
                <Link key={objeto.key} href={`/${objeto.nomeUrl}`}>
                    <div className="BoxObjetoAtalho">
                        <h5>{objeto.nome}</h5>
                        <Image src={objeto.url} alt={objeto.nomeUrl} width={40} height={40}/>
                    </div>
                </Link>
            ))}
        </div>
    )
}