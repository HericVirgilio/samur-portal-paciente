import "./style.css"
import { SliderOptionData } from "@/data/slider-option.data"
import { SliderOPtion } from "@/interface/slider-option.interface"
import Image from "next/image"
import '@fontsource/ibm-plex-sans';
export default function ProximoEvento(props: { id: string, ObjectData:SliderOPtion[], titulo: string, background: string}) {

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
            <span className="TituloSection" style={{ fontFamily: 'IBM Plex Sans', fontSize: "50px"}}>{props.titulo}</span>
            <div className="list-section-option">
                <Image src={'/icons/arrow-left.svg'} alt="Voltar" onClick={slideLeft} width={40} height={40} className='arrow' />
                <div id={props.id} className="slider-list-option">
                    {props.ObjectData.map((objeto) => 
                        <div key={objeto.name}>
                            <div key={objeto.name} className="item-section-option" 
                            style={{ backgroundColor: props.background }}>
                                <div className="item-section-option-DivImg">
                                    <Image src={objeto.img} alt={objeto.name} width={70} height={70}/>
                                </div>
                                <h5>{objeto.name}</h5>
                            </div>
                        </div>
                    )}
                </div>
                <Image src={'/icons/arrow-right.svg'} alt="Avançar" onClick={slideRight} width={40} height={40} className='arrow' />
            </div>
        </section>
    )
}