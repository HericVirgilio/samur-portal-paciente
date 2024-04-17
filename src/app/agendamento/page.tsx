"use client"
import HeaderTable from "@/components/cabecalho-tabela"
import HeaderPrincipal from "@/components/header-principal"
import TabelaAgendamento from "@/components/tabela-linha"
import { AgendamentoData } from "@/data/agendamento.data"
export default function Agendamento() {
    return (
        <div>
            <HeaderPrincipal />
            
                <HeaderTable />
                {AgendamentoData.map((objeto) => (
                    <TabelaAgendamento key={objeto.key} objeto={objeto}/>
                ))}
            
        </div>
    )
}