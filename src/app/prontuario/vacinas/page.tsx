"use client"
import "./style.css"
import HeaderPrincipal from "@/components/header-principal"
import SelecionePaciente from "@/components/selecione-paciente"


export default function Vacinas(){

    return(
        <div>
            <HeaderPrincipal/>
            <SelecionePaciente  rota="Prontuario"/>
        </div>
    )
}