"use client"
import React, { useState } from "react";
import HeaderPrincipal from "@/components/header-principal";
import BoxUserPrincipal from "@/components/box-user-principal";
import NovoAgendamentoPrincipal from "@/components/novo-agendamento";
import { Calendar } from "@/components/shadcn/calendar"
import "./style.css";
import BotaoGoogleAgenda from "@/components/botao-google-agenda";
import { AtalhosPrincipal } from "@/data/atalhos-principal.data";
import { UsuarioData } from "@/data/UsuarioData";
import Atalhos from "@/components/atalhos"
import Image from "next/image";
import Banner from "@/components/banner";
import MenuDesktop from "@/components/menus-desktop";
import Footer from "@/components/footer";
import ProximoEvento from "@/components/proximo-evento";
import SliderOption from "@/components/slider-option";
import { SliderOptionData } from "@/data/slider-option.data";
import { SliderEspecialidadesData } from "@/data/slider-especialidades.data";
import Whatsapp from "@/components/whatsapp";
import Cards from "@/components/cards";
export default function Home() {
  const [date, setDate] = useState<Date>(new Date())

  return (
    <main className="BoxPaginaPrincipal" style={{overflowX: "hidden"}}>
      <div className="ConteudoBanner">
      <HeaderPrincipal />
      <Banner/>
      </div>
      <div className="ConteudoPrincipal">
        <BoxUserPrincipal objeto={UsuarioData[0]}/>
        <NovoAgendamentoPrincipal/>
        <Atalhos atalhos={AtalhosPrincipal}/>
        <SliderOption id="2" ObjectData={SliderOptionData} titulo="Prontuário"/>
        <ProximoEvento id="1"/>
      </div>
      <Whatsapp/>
      <Footer/>
    </main>
  );
}
/*<SliderOption id="3" ObjectData={SliderEspecialidadesData} titulo="Nossas Especialidades"/> */ 