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
        nomeUrl: "http://localhost:3000/agendamento",
        url: "/icons/calendarioMenu.svg"
    },
    {
        key: 3,
        nome: "Documentos",
        nomeUrl: "http://localhost:3000/documentos",
        url: "/icons/documentosHamburguer.svg"
    },
    {
        key: 4,
        nome: "Financeiro",
        nomeUrl: "http://localhost:3000/financeiro",
        url:"/icons/financeiroMenu.svg"
    },
    {
        key: 5,
        nome: "Orçamento",
        nomeUrl: "http://localhost:3000/orçamento",
        url: "/icons/oraçamentoMenu.svg"
    },
    {
        key: 6,
        nome: "Prontuário",
        nomeUrl: "http://localhost:3000/prontuario",
        url: "/icons/protuario.svg"
    },
    {
        key: 7,
        nome: "Resultados",
        nomeUrl: "http://localhost:3000/resultados",
        url: "/icons/resultados.svg"
    }
]