"use client"
import HeaderPrincipal from "@/components/header-principal"
import SelectGenerico from "@/components/select-generico"
import { FormaDePagamentoData } from "@/data/forma.pagamento.data"
import { Calendar } from "@/components/shadcn/calendar"
import { useState } from "react"

export default function Consulta() {
    const [date, setDate] = useState<Date>(new Date())
    return (
        <div>
            <HeaderPrincipal />
            <Calendar
                mode="single"
                selected={date}
                className="rounded-md border w-[90vw]  mx-auto"
                style={{ backgroundColor: "white" }} />
        </div>
    )
}