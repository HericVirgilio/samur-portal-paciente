"use client"
import HeaderTable from "@/components/headerTable"
import HeaderPrincipal from "@/components/header-principal"
import Tabela from "@/components/tabela"
import { ResultadosData } from "@/data/resultados.data"
import BackgroundTabela from "@/components/backgroundTabela"
export default function Resultados() {
    return (
        <div>
            <HeaderPrincipal />
            <BackgroundTabela tituloTabela="Lista de Resultados">
                <HeaderTable />
                {ResultadosData.map((objeto) => (
                    <Tabela key={objeto.key} objeto={objeto} />
                ))}
            </BackgroundTabela>
        </div>
    )
}