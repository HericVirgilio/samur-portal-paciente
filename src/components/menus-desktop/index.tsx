import "./style.css"
import Image from "next/image"
export default function MenuDesktop (){
    return(
        <div className="ContainerMenuDesktop">
            <div className="ContainerIcones">
                <div className="ContainerAtalhosMenuHamburguer">
                    <ul className="AtalhosMenuHamburguer">
                        <li>Home</li>
                        <li>Agendamento</li>
                        <li>Documentos</li>
                        <li>Financeiro</li>
                        <li>Orçamento</li>
                        <li>Prontuário</li>
                        <li>Resultdos</li>
                    </ul>
                </div>
                <div className="NovoAgendamento">
                    
                    <span>Novo Agendamento</span>
                </div>
            </div>
        </div>
    )
}