"use client"
import HeaderTable from "@/components/header-table"
import HeaderPrincipal from "@/components/header-principal"
import Tabela from "@/components/tabela"
import { ResultadosData } from "@/data/resultados.data"
import BackgroundTabela from "@/components/background-tabela"
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