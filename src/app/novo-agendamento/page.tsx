"use client"
import HeaderPrincipal from "@/components/header-principal"
import Atalhos from "@/components/atalhos"
import { OpcoesNovoAgendamento } from "@/data/opcoesNovoAgendamento.data"
import { AgendamentoData } from "@/data/agendamento.data"
import SelecionePaciente from "@/components/selecione-paciente"
import Tabela from "@/components/tabela"
import "./style.css"

export default function NovoAgendamento(){
    return(
        <div style={{display: "grid", gap: "20px"}}>
            <HeaderPrincipal/>
            <h2 className="tituloPaginaNovoAgendamento">Novo Agendamento</h2>
            <h3 className="subtituloNovoAgendamento">Para quem é o agendamento?</h3>
            <SelecionePaciente/> 
            <h3 className="tituloAtalhos">Qual serviço você gostaria de agendar?</h3>
            <Atalhos atalhos={OpcoesNovoAgendamento}/>
            <Tabela titulo="Meus Agendamentos" objeto={AgendamentoData}/>
        </div>
    )
}