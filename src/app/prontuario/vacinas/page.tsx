"use client"
import "./style.css"
import HeaderPrincipal from "@/components/header"
import SelecionePaciente from "@/components/selecionePaciente"




export default function Vacinas(){
    return(
        <div>
            <HeaderPrincipal/>
            <SelecionePaciente />
        </div>
    )
}