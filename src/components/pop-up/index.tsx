import "./style.css"
import Image from "next/image"
import Tabela from "../tabela"
import { ResultadosData } from "@/data/resultados.data"
import HeaderTable from "../headerTable"
export default function PopUp(){
    return(
        <div className="BoxPopUp">
            <div className="BoxFecharPopUp">
                <Image className="FecharPopUp" src={"/icons/close-circulo.svg"} alt="fechar" height={30} width={30} />
            </div>
            <HeaderTable key={1}/>
            {ResultadosData.map((objeto) => (
            <Tabela key={objeto.key} objeto={objeto} texto1="Paciente" texto2="Data"/>
            ))}
        </div>
    )
}