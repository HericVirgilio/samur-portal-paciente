"use client"
import HeaderPrincipal from "@/components/header"
import PopUp from "@/components/pop-up"
import HeaderTable from "@/components/headerTable"
import Tabela from "@/components/tabela"
import { ResultadosData } from "@/data/resultados.data"


export default function ProcedimentosExternos() {
    return (
        <div>
            <HeaderPrincipal />
            <PopUp />
            <div style={{ backgroundColor: "var(--branco)", width: "95vw", margin: "20px auto", padding: "20px 0" }}>
                <h2 style={{ fontWeight: "bold", fontSize: "20px", marginLeft: "10px", marginBottom: "20px" }}>Procedimentos externos</h2>
                <HeaderTable />
                {ResultadosData.map((objeto) => (
                    <Tabela key={objeto.key}
                        objeto={objeto}
                        texto1="Paciente"
                        texto2="Data" />
                ))}
            </div>
        </div>
    )
}