import "./style.css"
import Image from "next/image";
import { SelectPacienteData } from "@/data/selectPaciente.data";
import { useState } from "react";

export default function SelecionePaciente() {

    const [select, setSelect] = useState({})
    const [logico, setLogico] = useState(false)
    const [selectTitulo, setTituloSelect] = useState("Selecionar o paciente")
    const [selectImagem, setImagemSelect] = useState("")
    const [visibilidadeImagem, setVisibilidadeImagem] = useState({ display: "none" })

    const AbrirMenu = () => {
        if (logico === false) {
            setSelect({
                display: "block"
            })
            setLogico(true)
        } else {
            setSelect({
                display: "none"
            })
            setLogico(false)
        }
    }
   
    const transformaTituloSelect = (key: number) => {
        const pacienteSelecionado = SelectPacienteData.find((paciente) => paciente.key === key)
        console.log(pacienteSelecionado)
        setLogico(true)
        AbrirMenu()
        setVisibilidadeImagem({ display: "block" })
        setTituloSelect(pacienteSelecionado.nome)
        setImagemSelect(pacienteSelecionado.url)
    }

    return (
        <div>
            <div className="BoxSelect">
                <div className="select-button" onClick={AbrirMenu}>
                    <div className="selected-titulo">
                        <Image className="ImagemSelectTitulo" style={visibilidadeImagem} 
                        src={selectImagem || "/icons/ profile-circle.svg"} 
                        alt="foto-perfil" height={40} width={40} />
                        <p>{selectTitulo}</p>
                    </div>
                    <div className="Arrow">
                        <Image src={"/icons/flecha-drop-down.svg"} alt="drop down" height={30} width={30} />
                    </div>
                </div>
                <div className="BoxMapPaciente" style={select}>
                    {SelectPacienteData.map((objeto, index) => (
                        <div className={index === SelecionePaciente.length - 1 ? "UltimoMapListaPacientes" : "MapListaPacientes"} key={objeto.key}
                            onClick={() => transformaTituloSelect(objeto.key)}>
                            <div>
                                <Image className="ImagemBodySelect" src={objeto.url} alt="perfil" height={40} width={40} />
                            </div>
                            <p>{objeto.nome}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
