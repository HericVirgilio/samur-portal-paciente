"use client"
import HeaderPrincipal from "@/components/header-principal"
import Atalhos from "@/components/atalhos"
import { OpcoesNovoAgendamento } from "@/data/opcoesNovoAgendamento.data"
import SelecionePaciente from "@/components/selecionePaciente"
import HeaderTable from "@/components/headerTable"
import TabelaAgendamento from "@/components/tabelaAgendamento"
import { AgendamentoData } from "@/data/agendamento.data"
import BackgroundTabela from '@/components/backgroundTabela'

export default function NovoAgendamento(){
    return(
        <div style={{display: "grid", gap: "20px"}}>
            <HeaderPrincipal/>
            <SelecionePaciente/>
            <Atalhos atalhos={OpcoesNovoAgendamento}/>
            <BackgroundTabela tituloTabela=''>
            <HeaderTable/> 
                {AgendamentoData.map((objeto,index) => (
                    <TabelaAgendamento objeto={objeto} key={index}/>
                ))}
            </BackgroundTabela>
        </div>
    )
}