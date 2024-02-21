"use client"
import React, { useState } from "react";
import Link from "next/link";
import HeaderPrincipal from "@/components/header";
import BoxUserPrincipal from "@/components/box-user-principal";
import NovoAgendamentoPrincipal from "@/components/box-novo-agendamento";
import { Calendar } from "@/components/ui/calendar"

export default function Home() {

  const [date, setDate] = useState<Date>(new Date())

  return (
    <main>
      <HeaderPrincipal />
      <Link href={'/login'}>ir para login</Link>
      <BoxUserPrincipal />
      <NovoAgendamentoPrincipal />
      <Calendar
        mode="single"
        selected={date}
        className="rounded-md border w-[90vw] mx-auto" 
        style={{backgroundColor: "white"}}/>
    </main>
  );
}
