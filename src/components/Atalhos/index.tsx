import "./style.css"
import { AtalhosPrincipal } from "@/data/atalhos-principal"
import Link from "next/link"
import Image from "next/image"
export default function Atalhos(){
    return(
        <div className="BoxAtalhos">
            {AtalhosPrincipal.map((objeto) => (
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