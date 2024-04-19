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

export default function Home() {
  const [date, setDate] = useState<Date>(new Date())

  return (
    <main className="BoxPaginaPrincipal">
      <HeaderPrincipal/>
      <div className="BoxUserAndNovoAgendamento">
        <BoxUserPrincipal objeto={UsuarioData[0]}/>
        <NovoAgendamentoPrincipal/>
      </div>
      <div style={{marginBottom:"20px"}}>
        <Atalhos atalhos={AtalhosPrincipal}/>
      </div>
      <div className="ContainerProximoEventoAndCalendario">
        <ProximoEvento/>
        <div>
          <Calendar
            mode="single"
            selected={date}
            className="calendario rounded-md border w-[90vw] mx-auto"
            style={{ backgroundColor: "white" }}/>
            <BotaoGoogleAgenda/>
        </div>
      </div>
    </main>
  );
}
