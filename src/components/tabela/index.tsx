import { GenericoInterfaceTabela } from "@/interface/generico.interface"
import Image from "next/image"
import "./style.css"
import { useState } from "react"
export default function Tabela(props: { objeto: GenericoInterfaceTabela, texto1: string, texto2: string }) {

    const [tabela, setTabela] = useState({});
    const [menuAberto, setMenu] = useState(false)

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
        } else {
            DropDown();
        }
    }
    return (
        <div>

            <div className={props.objeto.key % 2 === 0 ? "linhaPar" : "linhaImpar"} key={props.objeto.key}>
                <div id="BoxBodyTabela" >
                    <p>{props.objeto.nome}</p>
                    <p>{props.objeto.data.toLocaleDateString()}</p>
                    <Image className="setaParaBaixo" key={props.objeto.key} onClick={HandleDropDownClick} src="/icons/flecha-drop-down.svg" alt="drop down" height={20} width={20} />
                </div>
                <div style={tabela} className="DropDown">
                    <div className="BoxBodyTabelaDropDown">
                        <p>{props.objeto.primeiraColuna}</p>
                        <p>{props.objeto.primeiraColunaRes}</p>
                        <p>{props.objeto.segundaColuna}</p>
                        <p>{props.objeto.segundaColunaRes}</p>
                    </div>
                </div>
            </div>

        </div>
    )
}