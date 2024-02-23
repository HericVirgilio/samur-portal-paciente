import { DocumentosInterface } from "@/interface/documentos.interface"
import Image from "next/image"
import "./style.css"
import { useState } from "react"
export default function Tabela(props: { objeto: DocumentosInterface, texto1: string, texto2: string }) {

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
                    <Image key={props.objeto.key} onClick={HandleDropDownClick} src="/icons/flecha-drop-down.svg" alt="drop down" height={20} width={20} />
                </div>
                <div style={tabela} className="DropDown">
                    <div className="BoxBodyTabelaDropDown">
                        <p>Finalidade</p>
                        <p>{props.objeto.finalidade}</p>
                        <p>Status</p>
                        <p>{props.objeto.status}</p>
                    </div>
                </div>
            </div>

        </div>
    )
}