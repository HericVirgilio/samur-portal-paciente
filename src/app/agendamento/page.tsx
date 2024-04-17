"use client"
import HeaderPrincipal from "@/components/header-principal"
<<<<<<< HEAD
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
            
=======
import TituloFormatado from "@/components/titulo-componentes-menu"
import Mui3Colunas from "@/components/mui-3-colunas"

export default function Agendamento() {
    return (
        <div>
            <HeaderPrincipal/>
            <TituloFormatado objeto="Agendamento"/>
            <Mui3Colunas/>
>>>>>>> edab271b3d190bd76ed0867d7cec703129ba52c1
        </div>
    )
}