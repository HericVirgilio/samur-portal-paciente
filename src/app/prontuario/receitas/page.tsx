"use client"
import HeaderPrincipal from "@/components/header-principal"
import HeaderTable from "@/components/headerTable"
import Tabela from "@/components/tabela"
import { AtestadoData } from "@/data/atestado.data"
import BackgroundTabela from "@/components/backgroundTabela"

export default function Receitas() {
    return (
        <div>
            <HeaderPrincipal />
            <BackgroundTabela tituloTabela="Lista de Receitas">
                <HeaderTable />
                {AtestadoData.map((objeto) => (
                    <Tabela key={objeto.key}
                        objeto={objeto} />
                ))}
            </BackgroundTabela>
        </div>
    )
}