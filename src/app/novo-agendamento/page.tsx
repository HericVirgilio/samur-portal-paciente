"use client"
import HeaderPrincipal from "@/components/header"
import Atalhos from "@/components/atalhos"
import { OpcoesNovoAgendamento } from "@/data/opcoesNovoAgendamento.data"
import SelecionePaciente from "@/components/selecionePaciente"
import HeaderTable from "@/components/headerTable"
import TabelaAgendamento from "@/components/tabelaAgendamento"
import { AgendamentoData } from "@/data/agendamento.data"

export default function NovoAgendamento(){
    return(
        <div>
            <HeaderPrincipal/>
            <SelecionePaciente/>
            <Atalhos key={1} atalhos={OpcoesNovoAgendamento}/>
            <HeaderTable/>  
            {AgendamentoData.map((objeto) => (
                <TabelaAgendamento objeto={objeto} texto1="A" texto2="F" key={1}/>
            ))}         
        </div>
    )
}