"use client"
import HeaderPrincipal from "@/components/header-principal"
import { DocumentosData } from "@/data/documentos.data"
import Tabela from "@/components/tabela"
import HeaderTable from "@/components/header-table"
import BackgroundTabela from "@/components/background-tabela"
export default function Documentos() {
    return (
        <div>
            <HeaderPrincipal />
            <BackgroundTabela tituloTabela="Lista de documentos">
                <HeaderTable />
                {DocumentosData.map((objeto) => (
                    <Tabela key={objeto.key} objeto={objeto} />
                ))}
            </BackgroundTabela>
        </div>
    )
}