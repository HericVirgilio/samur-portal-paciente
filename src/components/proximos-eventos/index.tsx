import "./style.css"
import Carrousel from "../carrousel"
import Image from "next/image"
import { DataCarrousel } from "@/data/proximo-evento-home.data"
import { toDate } from "date-fns"

export default function ProximosEventos(){
    const id = "1"

    const slideLeft = () => {
        var slider = document.getElementById(id)
        if(slider) {
            slider.scrollLeft = slider.scrollLeft - 1100
        }
    }

    const slideRight = () => {
        var slider = document.getElementById(id)
        if(slider){
            slider.scrollLeft = slider.scrollLeft + 1100
        }
    }
    return(
        <section>
            <h3>Proximos Eventos</h3>
            <div className="list-section">
                    <Image src={"/icons/arrow-left.svg"} alt="Voltar" onClick={slideLeft} width={40} height={40} className="arrow"/>
                    {DataCarrousel.map((objeto) => (
                        <div key={objeto.nome} className="Card">
                            <span className="CapsulaFotoComNome">
                                <Image src={objeto.img} alt="foto-paciente" width={40} height={40} className="Foto"/>
                                <span>{objeto.nome}</span>
                            </span>
                            <span>Consulta: {objeto.medico}</span>
                            <span>Data: {new Date(objeto.data).toLocaleDateString()}</span>
                            <span>Hora: {objeto.hora}</span>
                        </div>
                    ))}
                    <Image src={"/icons/arrow-right.svg"} alt="Avançar" onClick={slideRight} width={40} height={40} className="arrow"/>
            </div>
        </section>
    )
}