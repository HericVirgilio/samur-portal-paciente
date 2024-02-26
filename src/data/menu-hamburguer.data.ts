import { MenuHamburguerInterface } from "@/interface/menuHamburguer.interface";

export const menuHamburguerData:MenuHamburguerInterface [] = [
    {
        key: 1,
        nome: "Inicio",
        nomeUrl: "/",
        url: "/icons/home.svg"
    },
    {
        key: 2,
        nome: "Agendamento",
        nomeUrl: "/agendamento",
        url: "/icons/calendarioMenu.svg"
    },
    {
        key: 3,
        nome: "Documentos",
        nomeUrl: "/documentos",
        url: "/icons/documentosHamburguer.svg"
    },
    {
        key: 4,
        nome: "Financeiro",
        nomeUrl: "/financeiro",
        url:"/icons/financeiroMenu.svg"
    },
    {
        key: 5,
        nome: "Orçamento",
        nomeUrl: "orçamento",
        url: "/icons/oraçamentoMenu.svg"
    },
    {
        key: 6,
        nome: "Prontuário",
        nomeUrl: "prontuario",
        url: "/icons/protuario.svg"
    },
    {
        key: 7,
        nome: "Resultados",
        nomeUrl: "resultados",
        url: "/icons/resultados.svg"
    }
]