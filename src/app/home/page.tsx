"use client";
import "./style.css";
import React, { useState } from "react";
import BoxUserPrincipal from "@/components/box-user-principal";
import NovoAgendamentoPrincipal from "@/components/novo-agendamento";
import { UsuarioData } from "@/data/UsuarioData";
import Banner from "@/components/banner";
import Footer from "@/components/footer";
import ProximoEvento from "@/components/proximo-evento";
import SliderOption from "@/components/slider-option";
import { SliderOptionData } from "@/data/slider-option.data";
import { PrincipaisServicos } from "@/data/principais-servicos.data";
import MenuAnimation from "@/components/menu-animation";

export default function Home() {
  const [date, setDate] = useState<Date>(new Date());

  return (
    <main className="BoxPaginaPrincipal" style={{ overflowX: "hidden" }}>
      <div className="ConteudoBanner">
        <MenuAnimation />
        <Banner />
      </div>
      <div className="ConteudoPrincipal">
        <BoxUserPrincipal objeto={UsuarioData[0]} />
        <NovoAgendamentoPrincipal />
        <SliderOption id="3" ObjectData={PrincipaisServicos} titulo="Principais Serviços"background="#6B8D8C"/>
        <SliderOption id="2" ObjectData={SliderOptionData} titulo="Prontuário"  background="var(--cor-logo-samur)"/>
        <ProximoEvento id="1" />
      </div>
      <Footer />
    </main>
  );
}
/*<SliderOption id="3" ObjectData={SliderEspecialidadesData} titulo="Nossas Especialidades"/> */
