import "./style.css"
import { ProximoEventoHome } from "@/data/proximo-evento-home.data"
import '@fontsource/poppins';
import Image from "next/image"

export default function ProximoEvento(props: { id: string }) {

    const id = props.id

    const slideLeft = () => {
        var slider = document.getElementById(id)
        if (slider) {
            slider.scrollLeft = slider.scrollLeft - 1100
        }
    }

    const slideRight = () => {
        var slider = document.getElementById(id)
        if (slider) {
            slider.scrollLeft = slider.scrollLeft + 1100
        }
    }
    return (
        <section>
            <h3 className="TituloSection">Seus Agendamentos</h3>
            <div className="list-section">
                <Image src={'/icons/arrow-left.svg'} alt="Voltar" onClick={slideLeft} width={40} height={40} className='arrow' />
                <div id={props.id} className="slider-list">
                    {ProximoEventoHome.map((objeto) => 
                        <div key={objeto.id}>
                            <div key={objeto.id} className="item-section">
                                <div className="item-component-section">
                                    <Image src={objeto.img} alt={objeto.nome} width={60} height={60} className="ImageUser"/>
                                    <span style={{ fontFamily: 'Poppins, sans-serif'}}>{objeto.nome}</span>
                                </div>
                                <div className="item-component-description" style={{ fontFamily: 'Poppins, sans-serif'}}>
                                    <Image src={"/icons/medico.png"} alt="medico" width={24} height={24}/>
                                    <span>Médico: {objeto.medico}</span>
                                    <Image src={"/icons/calendario.png"} alt="medico" width={24} height={24}/>
                                    <span>Data: {new Date(objeto.data).toDateString()}</span>
                                    <Image src={"/icons/relogio.png"} alt="medico" width={24} height={24}/>
                                    <span>Hora: {objeto.hora}</span>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <Image src={'/icons/arrow-right.svg'} alt="Avançar" onClick={slideRight} width={40} height={40} className='arrow' />
            </div>
        </section>
    )
}