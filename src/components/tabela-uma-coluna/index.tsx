import "./style.css"
import { GenericoTabelaSimples } from "@/interface/genericoTabelaSimples.interface"
import Image from "next/image"
import { lazy, useState } from "react"

export default function TabelaColunaUnica(props: { objeto: GenericoTabelaSimples, index: number }) {
    const [dropDown, SetDropDown] = useState({})
    const [status, setStatus] = useState(false)

    const abrirDropDown = () => {
        if (status) {
            SetDropDown({ display: "none" })
            setStatus(false)
        } else {
            SetDropDown({ display: "block" })
            setStatus(true)
        }
    }


    return (
        <div key={props.index} className={(props.index % 2) == 0 ? "ColunaVerde" : "ColunaBranca"}>
            <div id="DilplayColunaAll">
                <p>{props.objeto.nome}</p>
                <Image src="/icons/flecha-drop-down.svg" alt="Drop Down" height={20} width={20} onClick={abrirDropDown} loading="lazy"/>
            </div>
            <p style={dropDown} className="ObsTabela">Obs: {props.objeto.obs}</p>
        </div>
    )
}
