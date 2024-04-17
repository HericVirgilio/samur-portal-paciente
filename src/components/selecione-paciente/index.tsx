import "./style.css"
import Image from "next/image";
import { SelectPacienteData } from "@/data/selectPaciente.data";
import { useState } from "react";


export default function SelecionePaciente() {

    const [select, setSelect] = useState({})
    const [logico,setLogico] = useState(false)
    const [selectTitulo, setTituloSelect] = useState("Familiares cadastrados")
    const [selectImagem, setImagemSelect] = useState("")
    const [visibilidadeImagem, setVisibilidadeImagem] = useState({display: "none"})
    const [mundancaRadiusSelect,setMudancaRadiusSelect ] = useState("5px 5px 5px 5px")
    const [transition, setTrasition ] = useState("rotate(0deg)")

    const AbrirMenu = () => {
        if (logico === false) {
            setSelect({
                display: "block"
            })
            setMudancaRadiusSelect("5px 5px 0px 0px ")
            setTrasition("rotate(180deg)")
            setLogico(true)
        } else {
            setSelect({
                display: "none"
            })
            setMudancaRadiusSelect("5px 5px 5px 5px")
            setLogico(false)
            setTrasition("rotate(0deg)")
        }
    }

    const transformaTituloSelect = (key:number) => {
        const pacienteSelecionado = SelectPacienteData.find((paciente) => paciente.key === key)
        console.log(pacienteSelecionado)
        setLogico(true)
        AbrirMenu()
        setVisibilidadeImagem({display: "block"})
        setTituloSelect(pacienteSelecionado.nome)
        setImagemSelect(pacienteSelecionado.url)
    }

    return (
        <div className="BoxSelect">
            <h3 className="subtituloNovoAgendamento">Para quem é o agendamento?</h3>
            <div className="select-button" onClick={AbrirMenu} style={{borderRadius: mundancaRadiusSelect}}>
                <div className="selected-titulo">
                    <Image className="ImagemSelectTitulo" style={visibilidadeImagem} src={selectImagem} alt="foto-perfil" height={40} width={40} />
                    <p>{selectTitulo}</p>
                </div>
                <div className="Arrow">
                    <Image src={"/icons/flecha-drop-down.svg"} alt="drop down" height={25} width={25} style={{transform: transition, transition: "0.5s"}}/>
                </div>
            </div>

            <div className="BoxMapPaciente" style={select}>
                {SelectPacienteData.map((objeto,index) => (
                    <div className={ index === SelectPacienteData.length - 1 ? "UltimoItemMap" : "MapListaPacientes" } key={objeto.key} 
                        onClick={() => transformaTituloSelect(objeto.key)}>
                        <div>
                            <Image className="ImagemBodySelect" src={objeto.url} alt="perfil" height={40} width={40} />
                        </div>
                        <p>{objeto.nome}</p>
                    </div>
                ))}
            </div>

        </div>
    );
}