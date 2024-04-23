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
        <div  className="Container">
            <HeaderPrincipal/>
            <h2 className="tituloPaginaNovoAgendamento">Novo Agendamento</h2>
            <div className="BoxSelecaoPacienete">
                <SelecionePaciente/>
            </div>
            <h3 className="tituloAtalhos">Qual serviço você gostaria de agendar?</h3>
            <Atalhos atalhos={OpcoesNovoAgendamento}/>
            <Tabela titulo="Meus Agendamentos" objeto={AgendamentoData}/>
        </div>
    )
}