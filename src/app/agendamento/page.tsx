"use client"
import HeaderTable from "@/components/header-table"
import HeaderPrincipal from "@/components/header-principal"
import TabelaAgendamento from "@/components/tabela-agendamento"
import { AgendamentoData } from "@/data/agendamento.data"
import BackgroundTabela from "@/components/background-tabela"
export default function Agendamento() {
    return (
        <div>
            <HeaderPrincipal />
            <BackgroundTabela tituloTabela={"Meus Agendamentos"}>
                <HeaderTable />
                {AgendamentoData.map((objeto) => (
                    <TabelaAgendamento key={objeto.key} objeto={objeto}/>
                ))}
            </BackgroundTabela>
        </div>
    )
}