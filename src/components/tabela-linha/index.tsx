import { GenericoInterfaceTabelaAgendamento } from "@/interface/Agendamento.interface";
import Image from "next/image"
import "./style.css"
import { useState } from "react"
export default function Tabela(props: { objeto: GenericoInterfaceTabelaAgendamento}) {

    const [tabela, setTabela] = useState({});
    const [menuAberto, setMenu] = useState(false)
    const [transition, setTrasition ] = useState("rotate(0deg)")

    const DropDown = () => {
        setTabela({
            display: "block"
        })
        setMenu(true)
    }
    const FecharDropDown = () => {
        setTabela({
            display: "none"
        })
        setMenu(false)
    }
    const HandleDropDownClick = () => {
        if (menuAberto == true) {
            FecharDropDown();
            setTrasition("rotate(0deg)")
        } else {
            DropDown();
            setTrasition("rotate(180deg)")
        }
    }
    return (
        <div>

            <div className={"boxLinahasDaTabela"} key={props.objeto.key}>
                <div id="BoxBodyTabela" >
                    <p>{props.objeto.nome}</p>
                    <p>{props.objeto.data.toLocaleDateString()}</p>
                    <Image key={props.objeto.key} onClick={HandleDropDownClick} src="/icons/flecha-drop-down.svg" alt="drop down" height={20} width={20} style={{transform: transition, transition:"0.5s", cursor: "pointer"}}/>
                </div>
                <div style={tabela} className="DropDown">
                    <div className="BoxBodyTabelaDropDown">
                        <p>{props.objeto.primeiraColuna}</p>
                        <p>{props.objeto.primeiraColunaRes}</p>
                        <p>{props.objeto.segundaColuna}</p>
                        <p>{props.objeto.segundaColunaRes}</p>
                        <p>{props.objeto.terceiraColuna}</p>
                        <p>{props.objeto.terceiraColunaRes}</p>
                    </div>
                </div>
            </div>

        </div>
    )
}