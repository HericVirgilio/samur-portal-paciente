import { GenericoInterfaceTabela } from "@/interface/generico.interface"
import Image from "next/image"
import "./style.css"
import { useState } from "react"

export default function Tabela(props: { objeto: GenericoInterfaceTabela }) {
    const [menuAberto, setMenuAberto] = useState(false);

    const handleDropDownClick = () => {
        setMenuAberto(!menuAberto);
    }

    return (
        <div>
            <div className={props.objeto.key % 2 === 0 ? "linhaPar" : "linhaImpar"} key={props.objeto.key}>
                <div id="BoxBodyTabela">
                    <p>{props.objeto.nome}</p>
                    <p>{props.objeto.data.toLocaleDateString()}</p>
                    <Image className="setaParaBaixo" onClick={handleDropDownClick} src="/icons/flecha-drop-down.svg" alt="drop down" height={20} width={20} />
                </div>
                <div className={menuAberto ? "DropDown" : "DropDown hidden"}>
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
