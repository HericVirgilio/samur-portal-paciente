"use client"
import HeaderPrincipal from "@/components/header-principal"
import Atalhos from "@/components/atalhos"
import { OpcoesNovoAgendamento } from "@/data/opcoesNovoAgendamento.data"
import HeaderTable from "@/components/header-table"
import TabelaAgendamento from "@/components/tabela-agendamento"
import { AgendamentoData } from "@/data/agendamento.data"
import BackgroundTabela from '@/components/background-tabela'

export default function NovoAgendamento(){
    return(
        <div style={{display: "grid", gap: "20px"}}>
            <HeaderPrincipal/>
            <h2>Novo Agendamento</h2>
            
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