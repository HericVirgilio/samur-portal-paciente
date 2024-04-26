"use client"
import HeaderPrincipal from "@/components/header-principal"
import { DocumentosData } from "@/data/documentos.data"
import Mui3Colunas from "@/components/mui-3-colunas"
import TituloFormatado from "@/components/titulo-componentes-menu"
import Banner from "@/components/banner"
import MenuAnimation from "@/components/menu-animation"
import Footer from "@/components/footer"
import "./style.css"
export default function Documentos() {
  
    return (
        <div>
            <div className="ConteudoBanner">
                <MenuAnimation/>
                <Banner/>
            </div>
            <div className="MainDocumentos">
                <TituloFormatado objeto="Documentos"/>
                <Mui3Colunas/>
            </div>
            <Footer/>
        </div>
    )
}