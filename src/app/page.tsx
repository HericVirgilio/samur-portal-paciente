"use client"
import React, { useState } from "react";
import HeaderPrincipal from "@/components/header";
import BoxUserPrincipal from "@/components/box-user-principal";
import NovoAgendamentoPrincipal from "@/components/novo-agendamento";
import { Calendar } from "@/components/ui/calendar"
import ProximoEvento from "@/components/proximo-evento";
import "./style.css";
import BotaoGoogleAgenda from "@/components/botao-google-agenda";
import { AtalhosPrincipal } from "@/data/atalhos-principal";
import Atalhos from "@/components/atalhos";
export default function Home() {

  const [date, setDate] = useState<Date>(new Date())

  return (
    <main className="BoxPaginaPrincipal">
      <HeaderPrincipal/>
      <BoxUserPrincipal />
      <NovoAgendamentoPrincipal/>
      <div style={{marginBottom:"20px"}}>
        <Atalhos atalhos={AtalhosPrincipal}/>
      </div>
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
