import "./style.css"
import { lista } from "@/data/proximo-evento.data"
import Image from "next/image"
export default function ProximoEvento(){
    return(
        <div className="BoxProximoEvento">
            <div className="BoxtituloProximoEvento">
                <h3>Próximo evento</h3>
            </div>
            <div className="BoxProximoEventoDetalhes">
                <p className="tituloEvento">{lista.exameNome}</p>
                <p>{lista.descricao}</p>
                <div className="BoxDataHora">
                    <Image src="/icons/calendario.svg" alt="" width={20} height={20}/>
                    <p>{lista.data}</p>
                    <Image src="/icons/relogio.svg" alt="" width={20} height={20}/>
                    <p>{lista.hora}</p>
                </div>
            </div>
        </div>
    )
}