"use client"
import HeaderTable from "@/components/headerTable"
import HeaderPrincipal from "@/components/header-principal"
import TabelaAgendamento from "@/components/tabelaAgendamento"
import { AgendamentoData } from "@/data/agendamento.data"
import BackgroundTabela from "@/components/backgroundTabela"
export default function Agendamento() {
    return (
        <div>
            <HeaderPrincipal />
            <BackgroundTabela tituloTabela={"Meus Agendamentos"}>
                <HeaderTable />
                {AgendamentoData.map((objeto) => (
                    <TabelaAgendamento key={objeto.key} objeto={objeto} texto1="Paciente" texto2="Data" />
                ))}
            </BackgroundTabela>
        </div>
    )
}