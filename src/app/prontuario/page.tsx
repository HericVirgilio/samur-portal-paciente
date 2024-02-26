"use client"
import HeaderPrincipal from "@/components/header"
import Atalhos from "@/components/atalhos"
import { AtalhosIncialProntuario } from "@/data/atalhosInicial-prontuario.data"
import { AtalhosProntuarios } from "@/data/atalhos.prontuario"
import "./style.css"
export default function Prontuario(){
    return(
        <div>
            <HeaderPrincipal/>
            <h3 className="tituloProntuario">Prontuário</h3>
            <div style={{marginBottom: "10px"}}>
                <Atalhos atalhos={AtalhosIncialProntuario}/>
            </div>
            <Atalhos atalhos={AtalhosProntuarios}/>
        </div>
    )
}