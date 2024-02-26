"use client"
import HeaderTable from "@/components/headerTable"
import HeaderPrincipal from "@/components/header"
import TabelaAgendamento from "@/components/tabelaAgendamento"
import { AgendamentoData } from "@/data/agendamento.data"
export default function Agendamento(){
    return(
        <div>
            <HeaderPrincipal/>
            <div style={{ backgroundColor: "var(--branco)", width: "95vw", margin: "20px auto", padding: "20px 0" }}>
                <h2 style={{ fontWeight: "bold", fontSize: "20px", marginLeft: "10px", marginBottom: "20px" }}>
                    Meus Agendamentos
                </h2>
                <HeaderTable/>
                {AgendamentoData.map((objeto) => (
                    <TabelaAgendamento key={objeto.key} objeto={objeto} texto1="Paciente" texto2="Data" />
                ))}
            </div>
        </div>
    )
}