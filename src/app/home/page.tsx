"use client"
import React, { useState } from "react";
import HeaderPrincipal from "@/components/header-principal";
import BoxUserPrincipal from "@/components/box-user-principal";
import NovoAgendamentoPrincipal from "@/components/novo-agendamento";
import { Calendar } from "@/components/shadcn/calendar"
import ProximoEvento from "@/components/proximo-evento";
import "./style.css";
import BotaoGoogleAgenda from "@/components/botao-google-agenda";
import { AtalhosPrincipal } from "@/data/atalhos-principal.data";
import { UsuarioData } from "@/data/UsuarioData";
import Atalhos from "@/components/atalhos"
import Image from "next/image";
import Banner from "@/components/banner";
import MenuDesktop from "@/components/menus-desktop";
import Footer from "@/components/footer";

export default function Home() {
  const [date, setDate] = useState<Date>(new Date())

  return (
    <main className="BoxPaginaPrincipal">
      <HeaderPrincipal />
      <MenuDesktop />
      <Banner/>
      <div className="BoxUserAndNovoAgendamento">
        <BoxUserPrincipal objeto={UsuarioData[0]} />
        <NovoAgendamentoPrincipal />
      </div>
      <div className="AtalhosMobile">
        <Atalhos atalhos={AtalhosPrincipal} />
      </div>
      <div className="BoxCalendario">
          <div className="ProximoEventoMobile">
            <ProximoEvento />
          </div>
          <div>
            <Calendar
             mode="single"
             selected={date}
             className="calendario rounded-md border w-[90vw] mx-auto"
             style={{ backgroundColor: "white" }} />
           <BotaoGoogleAgenda />
           </div>
          <div className="ProximoEventoDesktop">
            <ProximoEvento />
          </div>
          <Image src="/images/propaganda.jpg" alt="propaganda" width={350} height={350} className="ImagemPubli"/>
      </div>
      <Footer/>
    </main>
  );
}
