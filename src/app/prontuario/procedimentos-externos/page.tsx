"use client"
import HeaderPrincipal from "@/components/header"
import HeaderTable from "@/components/headerTable"
import Tabela from "@/components/tabela"
import { AtestadoData } from "@/data/atestado.data"
import Image from "next/image"
import "./style.css"

export default function ProcedimentosExternos(){
    return(
        <div className="BoxProcedimentosExternos">
            <HeaderPrincipal/>
            <div style={{ backgroundColor: "var(--branco)", width: "95vw", margin: "20px auto", padding: "20px 0" }}>
                <h2 style={{ fontWeight: "bold", fontSize: "20px", marginLeft: "10px", marginBottom: "20px" }}>Lista de Receitas</h2>
                <HeaderTable/>
                {AtestadoData.map((objeto) =>(
                    <Tabela key={objeto.key}
                    objeto={objeto}
                    texto1="Paciente"
                    texto2="Data"/>
                ))}
            </div>
        </div>
    )
}