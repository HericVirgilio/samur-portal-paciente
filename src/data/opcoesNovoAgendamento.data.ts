import { AtalhoInterface } from "@/interface/atalhos.interface";

export const OpcoesNovoAgendamento: AtalhoInterface [] = [
    {   
        key: 1,
        nome: "Consulta",
        nomeUrl: "novo-agendamento/consulta",
        url: "/icons/consulta.svg"
    },
    {
        key: 2,
        nome: "TeleConsulta",
        nomeUrl: "novo-agendamento/teleconsulta",
        url: "/icons/computer.svg"
    },
    {
        key: 3,
        nome: "Marcar Exame",
        nomeUrl: "novo-agendamento/marcar-exame",
        url: "/icons/marcar-exames.svg"
    },
    {
        key: 4,
        nome: "Marcar Cirurgia",
        nomeUrl: "novo-agendamento/marcar-cirurgia",
        url: "/icons/marcar-cirurgia.svg"
    }
]