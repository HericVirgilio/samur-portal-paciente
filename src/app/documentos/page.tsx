"use client"
import HeaderPrincipal from "@/components/header-principal"
import { DocumentosData } from "@/data/documentos.data"
import Mui3Colunas from "@/components/mui-3-colunas"
import TituloFormatado from "@/components/titulo-componentes-menu"
export default function Documentos() {
  
    return (
        <div>
            <HeaderPrincipal />
            <TituloFormatado objeto="Documentos"/>
            <Mui3Colunas/>
        </div>
    )
}