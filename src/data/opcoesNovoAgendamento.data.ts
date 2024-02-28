import { AtalhoInterface } from "@/interface/atalhos.interface";

export const OpcoesNovoAgendamento: AtalhoInterface [] = [
    {   
        key: 1,
        nome: "Consulta",
        nomeUrl: "novo-agendamento/consulta",
        url: "http://localhost:3000/icons/consulta.svg"
    },
    {
        key: 2,
        nome: "TeleConsulta",
        nomeUrl: "novo-agendamento/teleconsulta",
        url: "http://localhost:3000/icons/computer.svg"
    },
    {
        key: 3,
        nome: "Marcar Exame",
        nomeUrl: "novo-agendamento/marcar-exame",
        url: "http://localhost:3000/icons/marcar-exames.svg"
    },
    {
        key: 4,
        nome: "Marcar Cirurgia",
        nomeUrl: "novo-agendamento/marcar-cirurgia",
        url: "http://localhost:3000/icons/marcar-cirurgia.svg"
    }
]