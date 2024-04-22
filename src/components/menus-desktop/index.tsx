import "./style.css"
import { menuHamburguerData } from "@/data/menu-hamburguer.data"
import Link from "next/link"
export default function MenuDesktop (){
    return(
        <div className="ContainerMenuDesktop">
            <div className="ContainerIcones">
                <div className="ContainerAtalhosMenuHamburguer">
                    <ul className="AtalhosMenuHamburguer">
                        {menuHamburguerData.map((objeto, index) => 
                            index !== menuHamburguerData.length - 1 &&(
                            <Link key={objeto.key} href={objeto.nomeUrl}>
                                <li>{objeto.nome}</li>
                            </Link>)
                        )}
                    </ul>
                </div>
                <div className="NovoAgendamento">
                    
                    <span>Novo Agendamento</span>
                </div>
            </div>
        </div>
    )
}