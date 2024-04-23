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
import ProximosEventos from "@/components/proximos-eventos";

export default function Home() {
  const [date, setDate] = useState<Date>(new Date())

  return (
    <main className="BoxPaginaPrincipal" style={{overflowX: "hidden"}}>
      <HeaderPrincipal />
      <MenuDesktop />
      <Banner/>
      <ProximosEventos/>
      <Footer/>
    </main>
  );
}
