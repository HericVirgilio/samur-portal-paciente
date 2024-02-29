"use client"
import HeaderPrincipal from "@/components/header-principal"
import PopUp from "@/components/pop-up"
import HeaderTable from "@/components/headerTable"
import Tabela from "@/components/tabela"
import { ResultadosData } from "@/data/resultados.data"
import BackgroundTabela from "@/components/backgroundTabela"

export default function ProcedimentosExternos() {
    return (
        <div>
            <HeaderPrincipal />
            <PopUp />
            <BackgroundTabela tituloTabela="Procedimentos externos">
                <HeaderTable />
                {ResultadosData.map((objeto) => (
                    <Tabela key={objeto.key}
                        objeto={objeto} />
                ))}
            </BackgroundTabela>
        </div>
    )
}