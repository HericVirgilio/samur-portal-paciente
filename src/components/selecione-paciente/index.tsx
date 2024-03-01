import "./style.css"
import Image from "next/image";
import { SelectPacienteData } from "@/data/selectPaciente.data";
import { useState } from "react";
import TabelaColunaUnica from "../tabela-uma-coluna";
import BoxTabela from "../box-tabela";
import { VacinasData } from "@/data/vacina.data";

export default function SelecionePaciente(props: {rota:string}) {

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
                   
                </div>
            </div>

            { props.rota === "Prontuario" &&
                <BoxTabela titulo="Vacinas">
                </BoxTabela>
            }

        </div>
    );
}
