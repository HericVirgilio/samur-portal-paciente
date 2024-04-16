"use client"
import HeaderPrincipal from "@/components/header-principal"
import { DocumentosData } from "@/data/documentos.data"
import Tabela from "@/components/tabela"
import HeaderTable from "@/components/cabecalho-tabela"
import BackgroundTabela from "@/components/background-tabela"
export default function Documentos() {
    return (
        <div>
            <HeaderPrincipal />
            <BackgroundTabela tituloTabela="Lista de documentos" children={undefined}>
            
            </BackgroundTabela>
        </div>
    )
}