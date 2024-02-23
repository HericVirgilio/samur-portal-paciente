"use client"
import HeaderPrincipal from "@/components/header"
import { menuHamburguerData } from "@/data/menu-hamburguer"
import { DocumentosData } from "@/data/documentos.data"
import Tabela from "@/components/tabela"
import HeaderTable from "@/components/headerTable"
export default function Documentos() {
    return (
        <div>
            <HeaderPrincipal objeto={menuHamburguerData} />
            <div style={{ backgroundColor: "var(--branco)", width: "95vw", margin: "20px auto", padding: "20px 0" }}>
                <h2 style={{ fontWeight: "bold", fontSize: "20px", marginLeft: "10px", marginBottom: "20px" }}>
                    Lista de Documentos
                </h2>
                <HeaderTable texto1="Paciente" texto2="Data"/>
                {DocumentosData.map((objeto) => (
                    <Tabela objeto={objeto} texto1="Paciente" texto2="Data" />
                ))}
            </div>
        </div>
    )
}