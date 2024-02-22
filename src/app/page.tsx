"use client"
import React, { useState } from "react";
import HeaderPrincipal from "@/components/header";
import BoxUserPrincipal from "@/components/box-user-principal";
import NovoAgendamentoPrincipal from "@/components/novo-agendamento";
import { Calendar } from "@/components/ui/calendar"
import ProximoEvento from "@/components/proximo-evento";
import Atalhos from "@/components/Atalhos";
import "./style.css";
import BotaoGoogleAgenda from "@/components/botao-google-agenda";
import { AtalhosPrincipal } from "@/data/atalhos-principal";
import { menuHamburguerData } from "@/data/menu-hamburguer";

export default function Home() {

  const [date, setDate] = useState<Date>(new Date())

  return (
    <main className="BoxPaginaPrincipal">
      <HeaderPrincipal objeto={menuHamburguerData}/>
      <BoxUserPrincipal />
      <NovoAgendamentoPrincipal/>
      <Atalhos atalhos={AtalhosPrincipal}/>
      <ProximoEvento/>
      <Calendar
        mode="single"
        selected={date}
        className="rounded-md border w-[90vw]  mx-auto"
        style={{ backgroundColor: "white" }} />
        <BotaoGoogleAgenda/>
    </main>
  );
}
