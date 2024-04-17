"use client"
import HeaderPrincipal from "@/components/header-principal"
import Atalhos from "@/components/atalhos"
import { AtalhosIncialProntuario } from "@/data/atalhosInicial-prontuario.data"
import { AtalhosProntuarios } from "@/data/atalhos.prontuario.data"
import TituloFormatado from "@/components/titulo-componentes-menu"
import "./style.css"
export default function Prontuario(){
    return(
        <div>
            <HeaderPrincipal/>
            <TituloFormatado objeto="Prontuário"/>
            <div className="BoxAtalhosProntuario">
                <Atalhos atalhos={AtalhosIncialProntuario}/>
                <Atalhos atalhos={AtalhosProntuarios}/>
            </div>
        </div>
    )
}