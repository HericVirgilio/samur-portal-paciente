"use client"
import HeaderTable from "@/components/headerTable"
import HeaderPrincipal from "@/components/header"
import Tabela from "@/components/tabela"
import { ResultadosData } from "@/data/resultados.data"
export default function Resultados(){
    return(
        <div>
            <HeaderPrincipal/>
            <div style={{ backgroundColor: "var(--branco)", width: "95vw", margin: "20px auto", padding: "20px 0" }}>
                <h2 style={{ fontWeight: "bold", fontSize: "20px", marginLeft: "10px", marginBottom: "20px" }}>
                    Lista de Resultados
                </h2>
                <HeaderTable/>
                {ResultadosData.map((objeto) => (
                    <Tabela key={objeto.key} objeto={objeto} texto1="Paciente" texto2="Data" />
                ))}
            </div>
        </div>
    )
}