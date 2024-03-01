"use client"
import HeaderPrincipal from "@/components/header-principal"
import HeaderTable from "@/components/header-table"
import Tabela from "@/components/tabela"
import { AtestadoData } from "@/data/atestado.data"
import BackgroundTabela from "@/components/background-tabela"

export default function Atestado(){
    return(
        <div>
            <HeaderPrincipal/>
                <BackgroundTabela tituloTabela="Atestados">
                    <HeaderTable/>
                    {AtestadoData.map((objeto) =>(
                        <Tabela key={objeto.key}objeto={objeto}/>
                    ))}
                </BackgroundTabela>      
        </div>
    )
}